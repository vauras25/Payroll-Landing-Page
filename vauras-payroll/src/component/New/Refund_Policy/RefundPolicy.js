import React from "react";
import "./RefundPolicy.css"; 

const RefundPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Refund Policy</h1>

      <div class="section">
        <h3>1. General Principle</h3>
        <p>Except as provided herein, the Company (Vauras Biztech LLP) expressly states that it shall not be liable to make any refunds under any circumstances. Refunds, if any, shall be strictly limited to amounts of Tax Deducted at Source ("TDS") as mandated under applicable statutory provisions.</p>
    </div>

    <div class="section">
        <h3>2. Condition Precedent - Verification of TDS Credit</h3>
        <p>Any refund of TDS shall be initiated solely upon verification and confirmation of credit in the taxpayer's Form 26AS under the relevant Permanent Account Number ("PAN") and financial year. The Company shall not entertain any request for refund until such statutory confirmation is available.</p>
    </div>

    <div class="section">
        <h3>3. Processing Timeline</h3>
        <p>Upon successful verification of TDS credit in Form 26AS, the Company shall initiate the refund process. The refund amount, if applicable, will be remitted within 45 business days from the date of such confirmation.</p>
    </div>

    <div class="section">
        <h3>4. Non-Reflection of TDS</h3>
        <p>In the event that TDS credit does not appear in Form 26AS, whether due to delay, error, or omission on the part of the deductor or the Income Tax Department, the Company shall bear no responsibility and shall not be obligated to process any refund until the credit is duly reflected.</p>
    </div>

    <div class="section">
        <h3>5. Exclusion of Liability</h3>
        <p>The Company shall not be responsible or liable for any loss, inconvenience, or claim arising out of delay or non-reflection of TDS credit in Form 26AS, as such matters fall outside the Company's control.</p>
    </div>

    <div class="section">
        <h3>6. Queries and Communication</h3>
        <p>For all queries or communications pertaining to this Refund Policy, the concerned party may contact the Company at <a href="mailto:accounts@vauras.in" class="email-link">accounts@vauras.in</a></p>
    </div>
    </div>
  );
};

export default RefundPolicy;
