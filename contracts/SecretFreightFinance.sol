// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint64, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SecretFreightFinance is SepoliaConfig {
    using FHE for *;
    
    struct FreightInvoice {
        euint32 invoiceId;
        euint32 amount;
        euint32 freightWeight;
        euint32 distance;
        ebool isPaid;
        ebool isVerified;
        string origin;
        string destination;
        address shipper;
        address carrier;
        uint256 timestamp;
    }
    
    struct FreightLoan {
        euint32 loanId;
        euint32 principal;
        euint32 interestRate;
        euint32 duration;
        ebool isActive;
        ebool isRepaid;
        address borrower;
        address lender;
        uint256 startTime;
    }
    
    struct InsuranceClaim {
        euint32 claimId;
        euint32 claimAmount;
        euint32 damagePercentage;
        ebool isApproved;
        ebool isPaid;
        string incidentDescription;
        address claimant;
        uint256 incidentDate;
    }
    
    mapping(uint256 => FreightInvoice) public invoices;
    mapping(uint256 => FreightLoan) public loans;
    mapping(uint256 => InsuranceClaim) public claims;
    mapping(address => euint32) public creditScores;
    mapping(address => euint32) public reputation;
    
    uint256 public invoiceCounter;
    uint256 public loanCounter;
    uint256 public claimCounter;
    
    address public owner;
    address public verifier;
    
    event InvoiceCreated(uint256 indexed invoiceId, address indexed shipper, string origin, string destination);
    event InvoicePaid(uint256 indexed invoiceId, address indexed payer, uint32 amount);
    event LoanCreated(uint256 indexed loanId, address indexed borrower, uint32 principal);
    event LoanRepaid(uint256 indexed loanId, address indexed borrower, uint32 amount);
    event ClaimSubmitted(uint256 indexed claimId, address indexed claimant, uint32 amount);
    event ClaimApproved(uint256 indexed claimId, bool approved);
    event CreditScoreUpdated(address indexed user, uint32 score);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createInvoice(
        string memory _origin,
        string memory _destination,
        externalEuint32 _amount,
        externalEuint32 _weight,
        externalEuint32 _distance,
        bytes calldata inputProof
    ) public returns (uint256) {
        uint256 invoiceId = invoiceCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        euint32 internalWeight = FHE.fromExternal(_weight, inputProof);
        euint32 internalDistance = FHE.fromExternal(_distance, inputProof);
        
        invoices[invoiceId] = FreightInvoice({
            invoiceId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            freightWeight: internalWeight,
            distance: internalDistance,
            isPaid: FHE.asEbool(false),
            isVerified: FHE.asEbool(false),
            origin: _origin,
            destination: _destination,
            shipper: msg.sender,
            carrier: address(0),
            timestamp: block.timestamp
        });
        
        emit InvoiceCreated(invoiceId, msg.sender, _origin, _destination);
        return invoiceId;
    }
    
    function payInvoice(
        uint256 invoiceId,
        externalEuint32 _amount,
        bytes calldata inputProof
    ) public returns (bool) {
        require(invoices[invoiceId].shipper != address(0), "Invoice does not exist");
        require(!FHE.decrypt(invoices[invoiceId].isPaid), "Invoice already paid");
        
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        
        // Verify payment amount matches invoice amount using FHE comparison
        require(FHE.decrypt(FHE.eq(internalAmount, invoices[invoiceId].amount)), "Payment amount mismatch");
        
        // Mark invoice as paid
        invoices[invoiceId].isPaid = FHE.asEbool(true);
        
        // Update reputation using FHE operations
        reputation[msg.sender] = FHE.add(reputation[msg.sender], FHE.asEuint32(10));
        
        emit InvoicePaid(invoiceId, msg.sender, 0); // Amount will be decrypted off-chain
        emit ReputationUpdated(msg.sender, 0); // Reputation will be decrypted off-chain
        
        return true;
    }
    
    function createLoan(
        externalEuint32 _principal,
        externalEuint32 _interestRate,
        externalEuint32 _duration,
        bytes calldata inputProof
    ) public returns (uint256) {
        uint256 loanId = loanCounter++;
        
        euint32 internalPrincipal = FHE.fromExternal(_principal, inputProof);
        euint32 internalInterestRate = FHE.fromExternal(_interestRate, inputProof);
        euint32 internalDuration = FHE.fromExternal(_duration, inputProof);
        
        loans[loanId] = FreightLoan({
            loanId: FHE.asEuint32(0), // Will be set properly later
            principal: internalPrincipal,
            interestRate: internalInterestRate,
            duration: internalDuration,
            isActive: FHE.asEbool(true),
            isRepaid: FHE.asEbool(false),
            borrower: msg.sender,
            lender: address(0),
            startTime: block.timestamp
        });
        
        emit LoanCreated(loanId, msg.sender, 0); // Principal will be decrypted off-chain
        return loanId;
    }
    
    function repayLoan(
        uint256 loanId,
        externalEuint32 _amount,
        bytes calldata inputProof
    ) public returns (bool) {
        require(loans[loanId].borrower != address(0), "Loan does not exist");
        require(!FHE.decrypt(loans[loanId].isRepaid), "Loan already repaid");
        
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        
        // Calculate repayment amount (principal + interest) using FHE operations
        euint32 interest = FHE.mul(loans[loanId].principal, loans[loanId].interestRate) / FHE.asEuint32(100);
        euint32 totalRepayment = FHE.add(loans[loanId].principal, interest);
        
        require(FHE.decrypt(FHE.eq(internalAmount, totalRepayment)), "Repayment amount mismatch");
        
        // Mark loan as repaid
        loans[loanId].isRepaid = FHE.asEbool(true);
        loans[loanId].isActive = FHE.asEbool(false);
        
        // Update credit score using FHE operations
        creditScores[msg.sender] = FHE.add(creditScores[msg.sender], FHE.asEuint32(20));
        
        emit LoanRepaid(loanId, msg.sender, 0); // Amount will be decrypted off-chain
        emit CreditScoreUpdated(msg.sender, 0); // Score will be decrypted off-chain
        
        return true;
    }
    
    function submitInsuranceClaim(
        externalEuint32 _claimAmount,
        externalEuint32 _damagePercentage,
        string memory _incidentDescription,
        bytes calldata inputProof
    ) public returns (uint256) {
        uint256 claimId = claimCounter++;
        
        euint32 internalClaimAmount = FHE.fromExternal(_claimAmount, inputProof);
        euint32 internalDamagePercentage = FHE.fromExternal(_damagePercentage, inputProof);
        
        claims[claimId] = InsuranceClaim({
            claimId: FHE.asEuint32(0), // Will be set properly later
            claimAmount: internalClaimAmount,
            damagePercentage: internalDamagePercentage,
            isApproved: FHE.asEbool(false),
            isPaid: FHE.asEbool(false),
            incidentDescription: _incidentDescription,
            claimant: msg.sender,
            incidentDate: block.timestamp
        });
        
        emit ClaimSubmitted(claimId, msg.sender, 0); // Amount will be decrypted off-chain
        return claimId;
    }
    
    function approveClaim(uint256 claimId, bool approved) public {
        require(msg.sender == verifier, "Only verifier can approve claims");
        require(claims[claimId].claimant != address(0), "Claim does not exist");
        
        claims[claimId].isApproved = FHE.asEbool(approved);
        
        if (approved) {
            claims[claimId].isPaid = FHE.asEbool(true);
        }
        
        emit ClaimApproved(claimId, approved);
    }
    
    function updateCreditScore(address user, externalEuint32 _score, bytes calldata inputProof) public {
        require(msg.sender == owner, "Only owner can update credit scores");
        
        euint32 internalScore = FHE.fromExternal(_score, inputProof);
        creditScores[user] = internalScore;
        
        emit CreditScoreUpdated(user, 0); // Score will be decrypted off-chain
    }
    
    function updateReputation(address user, externalEuint32 _reputation, bytes calldata inputProof) public {
        require(msg.sender == owner, "Only owner can update reputation");
        
        euint32 internalReputation = FHE.fromExternal(_reputation, inputProof);
        reputation[user] = internalReputation;
        
        emit ReputationUpdated(user, 0); // Reputation will be decrypted off-chain
    }
    
    // View functions for encrypted data (require decryption off-chain)
    function getInvoiceAmount(uint256 invoiceId) public view returns (euint32) {
        return invoices[invoiceId].amount;
    }
    
    function getLoanPrincipal(uint256 loanId) public view returns (euint32) {
        return loans[loanId].principal;
    }
    
    function getClaimAmount(uint256 claimId) public view returns (euint32) {
        return claims[claimId].claimAmount;
    }
    
    function getUserCreditScore(address user) public view returns (euint32) {
        return creditScores[user];
    }
    
    function getUserReputation(address user) public view returns (euint32) {
        return reputation[user];
    }
}
