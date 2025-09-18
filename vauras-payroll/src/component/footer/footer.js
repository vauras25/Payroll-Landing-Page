import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
import logo from "../../image/logo.png";

const privacyPolicyText = `

     
    <div class="section">
        <p>This Privacy Policy explains how information about you is collected, used and disclosed by Vauras Biztech LLP, a company incorporated under the Companies Act 2013, doing business as Salarybooks, and its subsidiaries and affiliates (collectively, "<strong>Salarybooks</strong>," "<strong>we</strong>," "<strong>us</strong>" or "<strong>our</strong>") when you access or use our website (the "<strong>Site</strong>") and our online payroll, benefits, human resources and other related services (the "<strong>Service</strong>"), which are provided through the Site. By using the Site and/or the Service, you consent to the collection, use and disclosure of your information as outlined in this Privacy Policy.</p>
    </div>

    <div class="section">
        <h3>Information We Collect and How We Collect It</h3>
        <p>In connection with your access to our Site and/or use of our Service, we collect and store certain information about you. Some of this information can be used on its own or in combination with other information to identify you individually. We call that information "personal information." We collect personal information and other information as described below:</p>
        
        <ul>
            <li><strong>Information You Provide.</strong> We collect your personal information when you or your employer registers to use the Service, provides information when using the Site or Service, updates your account information, adds additional services, submits information to verify your identity, contacts us with questions or feedback, or otherwise communicates with us. This personal information may include your name, address, email address, phone number, bank account information and taxpayer identification number.</li>
            
            <li><strong>When You Choose to Participate in Market Research Programs.</strong> We may collect information from you, including personal information, if you choose to participate in a market research program or survey.</li>
            
            <li><strong>Your Email or Social Network Contacts.</strong> We collect your email, social network and other contacts ("<strong>Contacts</strong>") if you choose to share them with us, or you choose to refer potential customers to us via our referral programs (the "<strong>Referred Leads</strong>").</li>
            
            <li><strong>Public Information.</strong> We may collect information about you from public sources, such as public social media pages.</li>
            
            <li><strong>Information from Third Parties.</strong> We may collect and receive information about you, including personal information and financial account information, from third parties, such as financial institutions and our service providers, for identity verification, fraud protection, risk assessment and other purposes. We may collect your business information from credit bureaus for the foregoing purposes as well. In addition, we may receive demographic information about you from third parties to help us better understand our users and to improve and market our Service.</li>
            
            <li><strong>Automatically Collected Information.</strong> We automatically collect certain usage information when you access the Site or use the Service, such as your device identifier (if using a mobile device), Internet Protocol (IP) address (if using a browser), operating system, browser type and the address of a referring site. We also automatically collect certain usage information through cookies and related technologies, as described below. In addition, our Site may implement third-party software, such as Google's Invisible reCAPTCHA (the "<strong>Invisible CAPTCHA</strong>"), that collects your information for security purposes.</li>
        </ul>
    </div>

    <div class="section">
        <h3>Third-Party Software, Cookies and Other Related Technologies</h3>
        <p>We may use cookies, pixel tags, web beacons and other similar technologies to better understand how you interact with our Site, monitor aggregate usage by our users, and monitor web traffic routing on our Site to help us improve our Site. Most Internet browsers let you change the browser's settings to stop accepting cookies or to prompt you before accepting a cookie from websites you visit. If you do not allow cookies, you may not be able to use some or all portions or functionality of the Site or Service.</p>
        
        <p>We partner with third parties to manage our advertising on other sites and to determine our Site performance. Such partners may use cookies, pixel tags, web beacons and other related technologies to collect information about your activities on our Site and other sites so that we can (i) provide advertising that may be of interest to you, and (ii) evaluate the efficacy of our marketing programs and our Site. To prevent our partners from collecting your information for these purposes, you can visit <a href="http://preferences-mgr.truste.com">http://preferences-mgr.truste.com</a> to opt out of certain advertising networks.</p>
        
        <p>We use the Invisible CAPTCHA on our Site to collect information for security reasons. Use of the Invisible CAPTCHA and information collected via the Invisible CAPTCHA are subject to Google's <a href="https://www.google.com/intl/en/policies/terms/">Terms of Service</a> and <a href="https://www.google.com/intl/en/policies/privacy/">Privacy Policy</a>, respectively.</p>
    </div>

    <div class="section">
        <h3>Use of Your Information</h3>
        <p>We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services, customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.</p>
        
        <p>With your consent, we will have access to your SMS, contacts in your directory, call history, location and device information and we may request you to provide your PAN and Aadhaar details to check your eligibility for certain products/services including but not limited to providing credit) being offered by us, our affiliates or our lending partners. We may share this data with our affiliates or our lending partners for the same purposes as mentioned above, however, we will not store any Aadhaar data ourselves. In the event that consent to this such use of data is withdrawn in the future, we will stop collection of such data but continue to store the data (save for Aadhaar data) and use it for internal purposes to further improve our services. We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</p>
        
        <p>Following are the objectives behind our collection and use of your information:</p>
        
        <ul>
            <li>to administer the Site, manage accounts and provide the Service;</li>
            <li>to monitor, analyze, improve and develop the Site and Service, and to create new Service features;</li>
            <li>to provide a more customized experience on the Site, Service and/or our partners' or affiliates' websites;</li>
            <li>to understand our users better;</li>
            <li>to validate user information provided to us for fraud and risk detection purposes;</li>
            <li>to determine eligibility for the Service;</li>
            <li>to prevent, identify and address fraudulent or other illegal activity and security issues;</li>
            <li>to (i) solicit feedback, (ii) respond to your or your employer's comments, requests or inquiries, (iii) provide customer service and support, or (iv) otherwise contact you in connection with the Site or Service;</li>
            <li>to generate anonymized, aggregate data containing only de-identified, non-personal information that we may use to publish reports;</li>
            <li>for our marketing purposes, such as (i) informing you of our products, services, features or offerings that may be of interest to you, (ii) providing you updates and announcements ,(iii) contacting Referred Leads and suggesting Contacts for you to refer to Salarybooks, (iv) improving and tailoring our advertising and communications, (v) analyzing our marketing efforts, and (vi) determining your eligibility for certain marketing programs, events and offers;</li>
            <li>to operate our business, which includes, without limitation, using your information (i) to process payments, (ii) to manage and enforce contracts with you or with third parties, (iii) to manage our corporate governance, compliance and auditing practices;</li>
            <li>to (i) comply with laws, rules and regulations, including any disclosure or reporting obligations, (ii) resolve disputes with users or third parties, (iii) respond to claims and legal process (including but not limited to subpoenas and court orders) as we deem necessary or appropriate, (iv) protect our property rights or those of third parties, (v) protect the safety of the public or any person, and (vi) prevent or stop any activity which we may consider to be (or to pose a risk of being) illegal, unethical or legally actionable; and</li>
            <li>for any other purpose for which you expressly authorize us to use your information.</li>
        </ul>
    </div>

    <div class="section">
        <h3>Sharing and Disclosure of Your Information</h3>
        <p>We will only share your information with the third parties listed below for the purposes described above in the "Use of Your Information" Section:</p>
        
        <ul>
            <li>government agencies and taxing authorities, as required to provide the Service, including but not limited to any person authorized to be in receipt of such information by the Income Tax Act, Employees Provident Fund and Miscellaneous Provisions Act, 1952, Payment of Bonus Act 1965, Payment of Gratuity Act 1972, Factories Act 1948, Maternity Benefit 1961, Industrial Employment Act 1946 or any other law for the time being in force and state and local tax agencies;</li>
            <li>banking and financial institutions;</li>
            <li>certain parties as necessary to respond in good faith to legal process (including but not limited to subpoenas and court orders);</li>
            <li>legal and financial advisors and auditors;</li>
            <li>third-party agents, partners and service providers, who (i) are only permitted to use your information as we allow (which may include contacting you on our behalf), and (ii) are required under law or contract to keep your personal information confidential; and</li>
            <li>the following third parties under the circumstances described below:
                <ul>
                    <li>we may share business information with credit bureaus, and we may share information with certain companies, banks and organizations for the purposes of fraud prevention and determining eligibility for the Service;</li>
                    <li>if you participate in our referral programs and/or share your Contacts with us and invite them to join Salarybooks, the referral emails sent to your Contacts and Referred Leads will include your name, employer's name and the fact that you are a Salarybooks user;</li>
                    <li>if there is a sale of Salarybooks (including, without limitation, a merger, stock acquisition, sale of assets or reorganization), or in the event that Salarybooks liquidates or dissolves, we may sell, transfer or otherwise share some or all of our assets, which could include your information, to the acquirer;</li>
                    <li>from time to time, we may share reports with the public that contain anonymized, aggregate, de-identified information and statistics; and</li>
                    <li>we may share your information with certain other third parties with whom you expressly authorize us to share your information.</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section">
        <h3>Your Choices</h3>
        
        <h3>Changing or Deleting Your Information</h3>
        <p>You may review, update, correct or delete your personal information through your account or by contacting us using the contact information listed below. If you would like us to delete your account entirely, please contact us at  <a href="mailto:namaste@salarybooks.com" class="email-link">namaste@salarybooks.com</a> with a request that we delete your personal information from our database. Please note that there may be some delay in the deletion of your data from our servers following your request. Additionally, we may retain some of your data as necessary to comply with our legal obligations, resolve disputes, enforce our agreements, or as needed for other legitimate business purposes.</p>
        
        <h3>Promotional Communications</h3>
        <p>You may unsubscribe from marketing and promotional emails that we send to you by following the opt-out instructions contained in such emails or by unsubscribing at  <a href="mailto:namaste@salarybooks.com" class="email-link">namaste@salarybooks.com</a>. If you opt out of receiving marketing and promotional emails from us, we may still need to send you emails related to your account and the Service.</p>
        
        <h3>Do Not Track</h3>
        <p>Our Site does not currently have the capability of responding to "Do Not Track" signals received from various browsers.</p>
    </div>

    <div class="section">
        <h3>Security</h3>
        <p>Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access. We employ administrative, physical and technical measures designed to protect your information from unauthorized access and to comply with all applicable regulations under the Information Technology Act 2000, IT Amendment Act 2006 and IT Amendment Act 2008 and under any other law for the time being in force; however, despite these efforts, no security measures are perfect or impenetrable and no method of data transmission can be guaranteed to prevent any interception or other type of misuse. We also depend on you to protect your information. Please set up a strong password and keep it confidential. If you become aware of any breach of security, please notify us immediately.</p>
    </div>

    <div class="section">
        <h3>Links to Other Sites</h3>
        <p>The Site and/or Service may contain links to other sites. Any information you provide on a third-party site is provided directly to the owner of that site and is subject to that party's privacy policy. This Privacy Policy does not apply to such sites, and we are not responsible for the content, policies, or privacy and security practices of such sites.</p>
    </div>
`;

const RP=`
 <div class="section">
        <h3>1. General Principle</h3>
        <p>Except as provided herein, the Company (Vauras Biztech LLP) expressly states that it shall not be liable to make any refunds under any circumstances. Refunds, if any, shall be strictly limited to amounts of Tax Deducted at Source ("TDS") as mandated under applicable statutory provisions.</p>
    </div>

    <div class="section">
        <h3>2. Condition Precedent – Verification of TDS Credit</h3>
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
`

const TC=` 
   <div class="section">
        <p>This document is an electronic record in terms of Information Technology Act, 2000 and all other applicable laws for the time being in force. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>
        
        <p>This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of the SALARYBOOKS Platform.</p>
        
        <p>This Terms of Service Agreement (this "<strong>Agreement</strong>") is made and entered into by and between you, as a User (as defined below), and Vauras Biztech LLP a corporation doing business as SALARYBOOKS, and its subsidiaries and affiliates (collectively, "<strong>Salarybooks</strong>," "<strong>we</strong>," "<strong>us</strong>" or "<strong>our</strong>"). This Agreement contains the terms and conditions that govern the use of SALARYBOOKS's all-in-one HR platform (the "<strong>Platform</strong>").Vauras Biztech LLP directly, and through its website and the associated domains thereof (the "<strong>Site</strong>"), offers customers the products and services listed (as such list may be updated, modified, or otherwise changed from time to time, collectively, the "<strong>Services</strong>").</p>
        
        <p>This Agreement is applicable to all persons who use or access the Platform and/or the Services, in their company's capacity or in an individual capacity, including authorized users representing the company, its employees, or other persons using or accessing the Services (collectively, "<strong>Users</strong>" and each, a "<strong>User</strong>"). If User is agreeing to these terms on behalf of a business or an individual other than User, User represents and warrants that User has authority to bind that business or other individual to this Agreement, and User's agreement to these terms will be treated as the agreement of such business or individual. In that event, "User" also refers to that business or individual. By clicking the applicable button to indicate User's acceptance of this Agreement, or by accessing or using the Platform, User agrees, effective as of the date of such action, to be bound by the Agreement.</p>
        
        <p>WHEREAS the company is in the business of providing an online platform for payroll management</p>
        
        <p>WHEREAS the company is looking to promote its services and expand its customer base by various ways including that of creation of an online platform</p>
        
        <p>WHEREAS the company claims and represents itself to have sufficient experience in the industry</p>
        
        <p>WHEREAS the company claims and represents itself as being in compliance of all the applicable laws and regulations in the industry for the time being in force</p>
        
        <p>WHEREAS the USER wishes to use the services of the COMPANY for payroll management</p>
        
        <p>WHEREAS the COMPANY has agreed to provide its services to the USER subject to the Terms and Conditions set herein and on the COMPANY's website</p>
        
        <p>Now this Agreement witnesses as follows:</p>
    </div>

    <div class="section">
        <h3>1. DEFINITIONS</h3>
        <p>In addition to the terms defined above and in various clauses in this agreement and in addition to the terms defined in the General Clauses Act, 1897, as amended up to date, the following definitions shall apply:</p>
        
        <div class="definition-list">
            <p class="definition-term">a. CONFIDENTIAL INFORMATION</p>
            <p>shall include all materials (non-public) and business-related information, written or oral, that the PLATFORM PROVIDER discloses or makes available to the OPERATOR ASSOCIATE (directly or indirectly) through any means of communication (observation).</p>
            
            <p class="definition-term">b. USER</p>
            <p>shall include any person availing any service through the SALARYBOOKS PLATFORM and may refer to the Super-user at the Organisation Level, the Managerial User at the Department Level or the Individual User at the Employee Level</p>
            
            <p class="definition-term">c. AGREEMENT</p>
            <p>shall be deemed to mean the following terms of use. Any Privacy Policy of the Company shall form a part of this agreement by way of reference.</p>
            
            <p class="definition-term">d. PLATFORM</p>
            <p>shall be deemed to mean the application in the name and style of Salarybooks and all the services and features available therein.</p>
            
            <p class="definition-term">e. SERVICES</p>
            <p>shall include all the payroll management features available for use on the platform and all other features incidental thereto</p>
            
            <p class="definition-term">f. COMPANY</p>
            <p>shall be deemed to mean Vauras Biztech LLP or any assignee thereof</p>
            
            <p class="definition-term">g. ACCOUNT ADMINISTRATOR</p>
            <p>shall include any person authorized by the User to access the Services by entering a confidential User ID and Password for the express purpose of accessing, reviewing, modifying and updating information and/or providing approvals on Super-User or Managerial User's behalf.</p>
            
            <p class="definition-term">h. AUTHORISED ACTIONS</p>
            <p>shall include any actions taken under Accounts that User has access to will be deemed authorized by User, regardless of User's knowledge of such actions. Authorized Actions include but are not limited to actions taken by User, an Account Administrator, or an authorized representative of User.</p>
            
            <p class="definition-term">i. AUTHORISED REPRESENTATIVES</p>
            <p>shall include any individual expressly or implicitly appointed by the Super-User or Managerial User to access the platform on behalf of such user.</p>
            
            <p class="definition-term">j. SERVICE PLAN</p>
            <p>shall mean and shall refer to the specific service plan selected by the User from the various alternative plans available for use on the platform.</p>
            
            <p class="definition-term">k. PLAN SELECTION</p>
            <p>shall be deemed to mean the User's choice of Service plan by clicking the applicable button.</p>
            
            <p class="definition-term">l. BANK ACCOUNT</p>
            <p>shall be deemed to mean the User's designated Bank Account as specified by the User through the Platform that the Company will be authorized to debit for all fees as they become payable.</p>
            
            <p class="definition-term">m. SMS</p>
            <p>means a message which is sent through short message service and includes a Multi Media message which is sent through Multi Media message service (MMS)</p>
            
            <p class="definition-term">n. THIRD PARTY SERVICE PROVIDER/ THIRD PARTY PARTNER</p>
            <p>includes persons providing services directly or indirectly to the User or the Platform as a part of the interaction between the User and the Company by way of using the platform.</p>
            
            <p class="definition-term">o. SHARED INFORMATION</p>
            <p>includes all information placed on the Platform by the User to facilitate the availing of the services provided by the Platform.</p>
        </div>
    </div>

    <div class="section">
        <h3>2. Warranties:</h3>
        
        <ol type="a">
            <li>The COMPANY in addition to the representations and warranties made in other paragraphs of THIS AGREEMENT herein makes additional representations and warranties under this clause 2 of THIS AGREEMENT.</li>
            
            <li>The COMPANY has the capacity and the authority to enter into this agreement and to perform all obligations hereunder. Further, the COMPANY is licensed and authorized to provide all services mentioned herein through the SALARYBOOKS PLATFORM.</li>
            
            <li>The COMPANY is authorized and licensed to operate and is compliant of all the laws, regulations, safety standards and good industry practices required to provide a payroll management platform.</li>
            
            <li>The COMPANY will put into place proper safety and security measures as per the international standards of the industry for the safety and the security of sensitive data.</li>
            
            <li>The COMPANY represents that the COMPANY is not insolvent and that the COMPANY has not been declared bankrupt and that no criminal cases are pending against the COMPANY or any of the personnel engaged by the COMPANY or its associates agents etc. with regard to the services available on the SALARYBOOKS PLATFORM. the company further represents that in case an action of insolvency or bankruptcy is initiated against the COMPANY or that a criminal case is initiated against the COMPANY or any of the personnel engaged by the COMPANY or its associates agents etc. with regard to the with regard to the services available on the SALARYBOOKS PLATFORM then the same shall be informed to the USER within a time of 24 hours of the same coming to the knowledge of the COMPANY</li>
            
            <li>The COMPANY represents that, the COMPANY has not entered into any agreement, or arrangement, in contradiction or in conflict to this instant agreement and the terms and conditions herein or in any other related documents and shall not enter into any such agreement or any such arrangement in the future till the subsistence of this agreement and three years thereafter.</li>
        </ol>
    </div>

    <div class="section">
        <h3>3. OBLIGATIONS OF THE USER</h3>
        
        <ol type="a">
            <li>The USER shall provide all relevant information to the COMPANY as may be required to avail of the services of the Salarybooks Platform and shall keep the status of such relevant information, including but not limited to details of employees, updated with the COMPANY.</li>
            
            <li>The USER shall provide the necessary contact details as may be required for all dealings and communications related to the services provided by the COMPANY.</li>
            
            <li>The USER shall be GST compliant and shall be liable for its own taxes.</li>
            
            <li>The USER shall provide any additional information related to services provided by the COMPANY through its platform on request within a reasonable time frame, in the format requested.</li>
            
            <li>The USER shall, on change of ownership and/or change of administration and/or release/dismissal/resignation of a relevant employee and/or change in the USER's policies shall immediately, within 24 hours, inform the platform provider about the same.</li>
            
            <li>User will designate and authorize either itself and/or one or more individuals with authority to (i) act on User's behalf, (ii) provide information on User's behalf, and (iii) bind User and/or User's business with respect to the Services (each such individual, an "<strong>Account Administrator</strong>"). An Account Administrator is authorized by User to access the Services by entering a confidential user ID and password. Such Account login information will entitle the Account Administrator, depending on their designation and the permissions given by User, to have the authority to input information and access, review, modify, and/or provide approvals on User's behalf.</li>
            
            <li>User is solely responsible for all actions taken under any Account that User has access to. Any actions taken under Accounts that User has access to will be deemed authorized by User, regardless of User's knowledge of such actions (the "<strong>Authorized Actions</strong>"). Authorized Actions include but are not limited to (i) actions taken by User, an Account Administrator, or an authorized representative of User (an "<strong>Authorized Representative</strong>"), and (ii) actions that User, an Account Administrator, or an Authorized Representative (or anyone that the COMPANY reasonably believes to be User, an Account Administrator, or an Authorized Representative) directs or instructs the COMPANY to take on its behalf.</li>
            
            <li>User is solely responsible for following instructions that the COMPANY provides to User with respect to the Services, whether such instructions are provided via the Platform, email, or otherwise.</li>
            
            <li>The User is solely responsible for obtaining, maintaining, and keeping secure any equipment and ancillary services necessary to connect to, access, or otherwise utilize the Platform, including but not limited to internet access, networking equipment, hardware, software, and operating systems.</li>
            
            <li>User will, and will cause authorized users of User's Account, including but not limited to Account Administrators and Authorized Representatives, to take reasonable steps to adequately secure, and keep confidential, any User Account passwords or credentials, and any information accessible via the User Account.</li>
            
            <li>If User believes or suspects that User's Account or passwords or credentials for User's Account have been disclosed to, accessed by, or compromised by unauthorized persons, User must immediately notify the COMPANY. The COMPANY reserves the right to prevent access to the Services if the Company has reason to believe that User's Account or passwords or credentials for User's Account have been compromised.</li>
            
            <li>The USER shall immediately inform the COMPANY of any discrepancies, whatsoever, in the data generated by the platform that the USER identifies after usage of any service provided on the platform.</li>
        </ol>
    </div>

    <div class="section">
        <h3>4. OBLIGATIONS OF THE COMPANY</h3>
        
        <ol type="a">
            <li>The COMPANY shall list its services after checking that such services conform to all laws for the time being in force and that the usage related formalities have been completed by the USER.</li>
            
            <li>The COMPANY may put up any offers on its platform as it deems fit however it shall have the sole discretion in this regard.</li>
            
            <li>The COMPANY shall provide a single point contact to the USER for operational purposes.</li>
            
            <li>The COMPANY shall be responsible for communication relating to the usage of the platform, modification, troubleshooting, compliance and charges incurred in connection therewith between the USER and the COMPANY.</li>
            
            <li>The COMPANY shall be responsible to carry out checks on the data provided by the USER whenever possible and may make suggestions to the USER for the betterment of its payroll management.</li>
            
            <li>The COMPANY may provide STANDARD OPERATING PROTOCOLS to the USER for incorporation and standardization of the COMPANY's services. Such protocols may include privacy protocols, security protocols, communication protocols etc, however it shall have sole discretion in this regard.</li>
        </ol>
    </div>

    <div class="section">
        <h3>5. ADDITIONAL TERMS OF SERVICE</h3>
        <p>In order to receive any Service, User must be enrolled in one of the following plans (each, a "<strong>Service Plan</strong>"), each of which is governed by the Service Terms listed next to such Service Plan and incorporated herein by reference, as applicable to User. User accepts the Service Terms listed next to the Service Plan which coincides with User's Plan Selection (as defined below) or Service Plan access by (i) clicking the applicable button to indicate User's Service Plan choice (the "<strong>Plan Selection</strong>"); (ii) clicking the applicable button to indicate User's acceptance of this Agreement (in the event that User is already enrolled in a Service Plan); or (iii) accessing or using the Services. By taking any of the aforementioned actions, User agrees to be bound by the applicable Service Terms as of the time that such action occurs. (Insert details)</p>
    </div>

    <div class="section">
        <h3>6. SERVICE FEES AND CHARGES</h3>
        <p>User agrees to pay the fees for the Services in accordance with the applicable fee schedules listed at Salarybooks, and User authorizes the Company to debit User's designated bank account, as specified by User through the Platform (the "<strong>Bank Account</strong>"), for all fees as they become payable. The Company reserves the right to change the fees for its Services from time to time. User will be notified of any change to existing fees at least thirty (30) days before the fee change goes into effect. If a fee increase or change to this Agreement is not acceptable to User, User may cancel the Services as provided herein prior to the time when such fee increase or change to this Agreement takes effect.</p>
    </div>

    <div class="section">
        <h3>7. USER ACCOUNT</h3>
        <p>To use the Platform, User must have an account with the Company (an "<strong>Account</strong>"). User hereby authorizes the Company to obtain and store User's Account information as necessary to make the Platform available to User. The user will be assigned a Unique Identity on creation of an account.</p>
    </div>

    <div class="section">
        <h3>8. PRIVACY POLICY</h3>
        <p>Please refer to the COMPANY's Privacy Policy for information on how the COMPANY collects, uses, and discloses information from Users. User acknowledges and understands that the COMPANY may collect, use, and disclose User's information pursuant to the COMPANY's Privacy Policy, as it may be updated from time to time.</p>
    </div>

    <div class="section">
        <h3>9. USER VERIFICATION</h3>
        <p>User gives the COMPANY permission to obtain, verify, and record information that identifies the individual who creates an Account, is the intended user of an Account, or accesses the Services. The COMPANY may ask for User's name, address, date of birth, social security number, and other information that will allow the COMPANY to identify User. The COMPANY may also ask to see the User's driver's license or other identifying documents.</p>
    </div>

    <div class="section">
        <h3>10. CONSENT TO RECEIVE MESSAGES</h3>
        <p>By providing User's mobile phone number to the COMPANY, User agrees that the COMPANY may send User autodialed Short Message Service ("<strong>SMS</strong>") or Multimedia Messaging Service ("<strong>MMS</strong>") messages about activity in User's Account and service updates, as well as SMS or MMS messages soliciting User's feedback about the Services and User's experience interacting with the COMPANY's Customer Care team. Standard message and data rates may apply. Note that the COMPANY will not send User autodialed marketing SMS or MMS messages unless User expressly agrees in writing to receive such messages.</p>
    </div>

    <div class="section">
        <h3>11. THIRD PARTY WEBSITES, SERVICES AND RESOURCES</h3>
        <p>User will be able to elect to receive services from partners of The COMPANY (each such service, a "<strong>Third-Party Service</strong>," and each such partner, a "<strong>Partner</strong>") through the platform. User is solely responsible for, and assumes all risk arising from, User's election to receive and User's receipt of any Third-Party Service. The COMPANY is not responsible for Third-Party Services or any material, information, or results made available through Third-Party Services. If User elects to receive a Third-Party Service, User authorizes The COMPANY to submit to the applicable Partner any and all documents and information about User, User's business and User's business' employees that are necessary for such Partner to provide the Third-Party Service to User, (collectively, the "<strong>Shared Information</strong>"). User is responsible for the accuracy of all Shared Information. User represents and warrants that User has all the rights in and to any Shared Information necessary to provide Shared Information to The COMPANY and for The COMPANY to provide it to Partners, and that The COMPANY's use or disclosure of Shared Information as contemplated hereunder will not violate any law for the time being in force. User agrees that by electing to receive a Third-Party Service, and by consenting and authorizing The COMPANY to submit User's Shared Information to a Partner, User has waived and released any Claim against The COMPANY and its directors, officers, and employees arising out of a Partner's use of User's Shared Information, even if that use is not authorized by the applicable agreement between User and the Partner or any relevant provision of any law for the time being in force including the Payment and Settlement Act 2007.</p>
    </div>

    <div class="section">
        <h3>12. GENERAL PROHIBITIONS</h3>
        <p>The User agrees not to take any of the following actions:</p>
        
        <ol class="prohibitions" type="a">
            <li>Use the Services other than as authorized in this Agreement;</li>
            
            <li>Resell, sublicense, timeshare, or otherwise share the Services with any third party;</li>
            
            <li>Display, mirror, or frame (i) the Site, or the layout or design of any page on the Site or form contained on a page; (ii) the Platform; (iii) the Services; or (iv) The COMPANY Content or any individual element within the Site, Platform, or Services, including The COMPANY's name and any The COMPANY trademark, logo, or other proprietary information, in each case, without The COMPANY's express prior written consent;</li>
            
            <li>Access, tamper with, or use non-public areas of the Platform, Services, The COMPANY's computer systems, or the technical delivery systems of The COMPANY's providers;</li>
            
            <li>Interfere or attempt to interfere with the proper working of the Platform or the Services (including but not limited to any application, function, or use of the Services) or any activities conducted on the Services;</li>
            
            <li>Use manual or automated software, devices, or other processes to "crawl" or "spider" any page of the Site;</li>
            
            <li>Harvest or scrape any Content from the Platform or Services;</li>
            
            <li>Attempt to probe, scan, or test the vulnerability of any The COMPANY system or network or breach any security or authentication measures;</li>
            
            <li>Avoid, bypass, remove, deactivate, impair, descramble, or otherwise circumvent any technological measure implemented by The COMPANY or any of The COMPANY's providers or any other third party (including another User) to protect the Platform, Services, or Content;</li>
            
            <li>Attempt to access or search the Platform, Services, or Content or download Content from the Platform or Services through the use of any engine, software, tool, agent, device, or mechanism (including spiders, robots, crawlers, data mining tools, or the like), other than the software and/or search agents provided by The COMPANY or other generally available third-party web browsers;</li>
            
            <li>Access the Services for the purposes of monitoring its availability, performance, or functionality, or for any other benchmarking or competitive purposes;</li>
            
            <li>Use the Platform, Services, or Content, or any portion thereof, (i) for any purpose other than User's internal business purposes, or (ii) for the benefit of any third party or in any manner not permitted by this Agreement;</li>
            
            <li>Attempt to decipher, decompile, disassemble, reverse engineer, or otherwise attempt to derive any source code, or underlying ideas, or algorithms of any of the software used to provide the Platform, Services, or Content;</li>
            
            <li>Modify, translate, or otherwise create derivative works of any part of the Platform, Services, or Content other than User's own User Content;</li>
            
            <li>Interfere with, or attempt to interfere with, the access of any User, host, or network, or use any device, software, or routine that is intended to damage, surreptitiously intercept, or expropriate any system, data, or communication, including, without limitation, by sending a virus, overloading, flooding, spamming, or mail-bombing the Platform or Services;</li>
            
            <li>Impersonate or misrepresent User's affiliation with any person or entity;</li>
            
            <li>Engage in any fraudulent, deceptive, or illegal practices or activities, or use the Services to directly or indirectly support any such practices or activities;</li>
            
            <li>Encourage, assist, or enable any other individual to do any of the foregoing.</li>
        </ol>
    </div>

    <div class="section">
        <h3>13. COMPANY'S RIGHT TO MONITOR USAGE</h3>
        <p>Although the COMPANY is not obligated to monitor access to or use of User Content or to review or edit any User Content, the COMPANY has the right to do so for the purposes of operating the Platform and Services, ensuring compliance with this Agreement, and complying with applicable law or other legal requirements. The COMPANY reserves the right, but is not obligated, to remove or disable access to any User Content, at any time and without notice, for any reason, including, but not limited to, if the COMPANY, at its sole discretion, considers any User Content to be objectionable or in violation of this Agreement.</p>
        
        <p>The COMPANY has the right to monitor access to and use of the Platform, Services, and Content and to investigate conduct that the COMPANY believes could affect the Platform, Services, or Content, including violations of this Agreement. The COMPANY may also consult and cooperate with law enforcement authorities and administrative agencies to prosecute Users who violate the law.</p>
    </div>

    <div class="section">
        <h3>14. INDEMNITY</h3>
        <p>User will indemnify and hold harmless Salarybooks and its officers, directors, employees, and agents (the "<strong>Indemnified Parties</strong>"), from and against any claims, disputes, demands, liabilities, damages, losses, costs, judgements, penalties, fines, and expenses (including, without limitation, reasonable legal and accounting fees) (collectively, the "<strong>Claims</strong>"), arising out of or in any way connected with any violation of any of the terms of this agreement or of any other law for the time being in force by the USER in any manner whatsoever.</p>
    </div>

    <div class="section">
        <h3>15. LIMITATION OF LIABILITY</h3>
        <p>The COMPANY is not responsible or liable for (i) User Content or anyone's reliance on User Content; (ii) Resulting Errors or any consequences or Claims directly or indirectly arising from Resulting Errors; (iii) any consequences or Claims directly or indirectly resulting from User's delay in providing, or User's failure to provide, the COMPANY with information necessary for its provision of Services; (iv) User's violation of any law for the time being in force; (v) unauthorized third-party actions taken in User's Account and any transactions, consequences, or Claims arising therefrom; (vi) User's negligence or any negligence of User's Account Administrator or Authorized Representative; (vii) any Claims, or portions of any Claims, that could have reasonably been avoided or mitigated by User through reasonable efforts; (viii) any circumstances or Claims arising out of or related to a Partner's use of User's Shared Information; (ix) any Requested Actions, or any consequences or Claims directly or indirectly resulting therefrom; or (x) User's failure, or the failure of any Account Administrators or Authorized Representatives, to properly follow the COMPANY's instructions with respect to the Services.</p>
    </div>

    <div class="section">
        <h3>16. DUE DILIGENCE</h3>
        <p>That the USER shall exercise due diligence to ensure that there is no negligence in implementing and maintaining reasonable security practices in the course of usage of the platform. The USER undertakes to notify the COMPANY immediately if it apprehends unauthorized disclosure or dissemination of personal information in any manner whatsoever.</p>
    </div>

    <div class="section">
        <h3>17. CHANGES TO THE AGREEMENT, PLATFORM OR SERVICE</h3>
        <p>The COMPANY may modify the Agreement at any time, at the COMPANY's sole discretion. If the COMPANY does so, the COMPANY shall let User know either by posting the modified Agreement on the Platform or Site or through other communications. It is important that User reviews the Agreement whenever the COMPANY modifies it because if User continues to use the Platform or Services after the COMPANY has notified User of the modification and the modified Agreement has been posted on the Platform or Site, User is indicating to the COMPANY that User agrees to be bound by the modified Agreement. If User does not agree to be bound by the modified Agreement, then User may not continue to use the Platform or Services. Because the Platform and Services are evolving over time, The COMPANY may change or discontinue all or any part of the Platform, Services, or the COMPANY Content at any time and without notice, at the COMPANY's sole discretion.</p>
    </div>

    <div class="section">
        <h3>18. Whole Agreement</h3>
        <p>This agreement along with any privacy policy and any other policy published by the company on its website shall constitute the complete agreement and the policies published on the website by the company are incorporated into these terms and conditions by way of reference. This agreement supersedes all previous communications, representations, assurances or agreement either written or oral between the parties hereto.</p>
    </div>

    <div class="section">
        <h3>19. Severability</h3>
        <p>If any provision of this Agreement is held to be invalid or unenforceable for any reason for a court of competent jurisdiction, the remaining provisions will continue in full force without being impaired or invalidated in any way.</p>
    </div>

    <div class="section">
        <h3>20. INTELLECTUAL PROPERTY OWNERSHIP</h3>
        
        <ol type="a">
            <li>The brand, Trade name, Trademark, software, software codes, Graphical User Interface, slogans, taglines, designs, drawings, domain names, trade secrets, confidential information, data, photographs, blogs, images, GIFs, newsletters, testimonials, reviews and ratings, and promotion codes (whether registered or unregistered) are and shall be the property and asset of the COMPANY.</li>
            
            <li>The USER shall not use any Intellectual property asset, of the COMPANY or that associated with the Salarybooks without written consent and explicit approval from the COMPANY under any circumstance.</li>
            
            <li>The USER shall abide by and follow the Intellectual property assets usage policy as may be provided by the COMPANY from time to time.</li>
            
            <li>The data and information provided to the COMPANY by the USER under this agreement shall be deemed to be assigned for any and all usage by the COMPANY.</li>
            
            <li>The USER shall not infringe any Intellectual Property Rights of the COMPANY or any third person.</li>
        </ol>
    </div>

    <div class="section">
        <h3>21. DISPUTE RESOLUTION</h3>
        
        <ol type="a">
            <li>In the case of any disagreement or dispute arising out of or under this AGREEMENT the parties shall make their best efforts to come to an amicable solution. In case any mediation is required the same will be done at Kolkata.</li>
            
            <li>In case the parties fail to reach an amicable solution even after 30 days of initiation of mediation, the dispute shall be referred to arbitration by a single/sole arbitrator appointed by the COMPANY, the venue of such arbitration shall be at Kolkata and the arbitration proceedings shall take place under the Arbitration and Conciliation Act, 1996 as amended up-to-date. The Decision of the Arbitrator shall be binding on the Parties.</li>
            
            <li>The parties shall have the right to approach the court and obtain interim injunctions pending the decision by the arbitrator.</li>
            
            <li>The parties shall also have the right to approach the court in case there is a violation of the Confidentiality clause to this AGREEMENT or the Privacy Policies under this Agreement even after the discharge of this AGREEMENT</li>
            
            <li>The proper law of the contract is Indian Law and the Arbitration will be a domestic Arbitration and not an International Arbitration.</li>
            
            <li>If the USER is a partnership firm all the partners shall be jointly and severally liable in respect of all dues, liabilities and transactions arising from this agreement or in connection therewith.</li>
        </ol>
    </div>

    <div class="section">
        <h3>22. NOTICES</h3>
        <p>Any notices given under this AGREEMENT shall be considered served if in writing sent to the address of the recipient party as provided in the records.</p>
    </div>
`
export default function Footer() {
    const navigate = useNavigate();
    function route(){
        navigate('/contact')
    }
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", body: "" });

 const openModal = (type) => {
    if (type === "privacy") {
      setModalData({ title: "Privacy Policy", body: privacyPolicyText });
    } else if (type === "refund") {
      setModalData({
        title: "Refund Policy",body: RP});
    } else if (type === "terms") {
      
      setModalData({ title: "Terms & Conditions", body: TC });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData({ title: "", body: "" });
  };

  return (
    <>
    <div className="full-footer">
      <div className="Footer-full">
      <div className="contact-section">
      {/* Left - Call us */}
      <div className="contact-item1">
        <strong>
            <h4>Call us at:</h4>
        <p>+91 9831776186</p>
        <p>+91 7605060596</p>
        </strong>
      </div>

      {/* Center - Logo */}
      <div className="contact-logo">
        <img src={logo} alt="Salary Books Logo" />
      </div>

      {/* Right - Email */}
      <div className="contact-item2">
        <h4>Send us a message</h4>
        <p className="email">namaste@salarybooks.com</p>
        <button className="contact-btn" onClick={route}>GET IN TOUCH</button>
      </div>
      
    </div>
    
   <div className="foot">
  <a href="#" onClick={(e) => { e.preventDefault(); openModal("privacy"); }}>
    Privacy Policy
  </a>
  <a href="#" onClick={(e) => { e.preventDefault(); openModal("refund"); }}>
    Refund Policy
  </a>
  <a href="#" onClick={(e) => { e.preventDefault(); openModal("terms"); }}>
    Terms & Conditions
  </a>
</div>
      <div></div>
      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
           <h2>{modalData.title}</h2>
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: modalData.body }}
            />
          </div>
        </div>
      )}
    </div>
    </div>
  </>
  );
}
