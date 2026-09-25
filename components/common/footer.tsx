"use client"

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Footer() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [privacyPolicyPopUp, updatePrivacyPolicyPopUp] = useState(false);

    const [disclaimerPopUp, updateDisclaimerPopUp] = useState(false);

    const stopBodyScroll = () => {
        document.body.classList.add("overflow-hidden");
    }

    const startBodyScroll = () => {
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <>
        <section className={`fixed top-0 left-0 bg-black/50 z-10 w-full h-screen overflow-y-auto pt-30 pb-10 flex justify-center transtion-all origin-center duration-200 text-white font-galaxie-polaris-light ${privacyPolicyPopUp ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0'}`}>
            <div className="w-[900px] relative bg-contain bg-center h-fit" style={{backgroundImage: `url(${basePath}/images/modal-bg.jpg)`}}>
                <IoMdClose onClick={() => { updatePrivacyPolicyPopUp(false); startBodyScroll(); }} className="absolute top-10 right-5 cursor-pointer text-[#d1aa6c]" size={25} />
                <div className="pt-15 pb-5">
                    <h2 className="uppercase border-b border-[#d1aa6c] pb-1 w-fit mx-auto text-4xl tracking-[1px]">Privacy Policy</h2>
                </div>
                <div className="text-[#cecbcb] px-10 py-10 flex flex-col gap-3 privacy_policy">
                    <p>Panchshil Realty (which term includes all subsidiaries of Panchshil Realty) ("Company", "we" or &ldquo;us&rdquo;) respect your privacy and are committed to protecting it through our compliance with this policy. Panchshil Realty operates www.trumptowerspune.com (the "Website").</p>
                    <p>This policy describes the types of information we may collect from you or that you may provide when you visit the website www.trumptowerspune.com and our practices for collecting, using, maintaining, protecting and disclosing that information.</p>
                    <p>This policy applies to information we collect:</p>
                    <ul>
                        <li>On this Website.</li>
                        <li>In e-mail, text and other electronic messages between you and this Website.</li>
                        <li>Through mobile and desktop applications you may download from this Website, which provide dedicated non-browser-based interaction between you and this Website.</li>
                        <li>When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.</li>
                    </ul>
                    <p>It does not apply to information collected by:</p>
                    <ul>
                        <li>us offline or through any other means, including any other website operated by any third party; or</li>
                        <li>any third party, including through any application or content (including advertising) that may link to the Website.</li>
                    </ul>
                    <p>Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time. Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.</p>
                    <p><b>DEFINITIONS</b></p>
                    <p>Panchshil Realty means the company, corporation, firm, individual or association of persons currently administering, providing content for, maintaining and otherwise managing the Site and every employee of Panchshil Realty and its advertising agent or agents for the time being and their employees, and every consultant, advisor and associate of Panchshil Realty and their respective employees.</p>
                    <p>"Contract", "Agreement" and "Terms of Service" refer to the terms and conditions herein set forth.</p>
                    <p>"Employee" means every person working in any capacity for Panchshil Realty as defined herein and includes every member of his family and every person residing in his household as a member of his family. "Hosting", with all its grammatical variations, means and includes the provision of Services by Panchshil Realty at the Site and subject always to the provisions of the Contract.</p>
                    <p>"Id" means the unique identification name or number assigned to every Member.</p>
                    <p>"Member" means and includes every person who, having satisfied the Eligibility Criteria set forth herein, has successfully completed the on-line registration process at the Site and has been assigned a unique Id by Panchshil Realty and is not in default and has not committed breach of any of the terms of this Agreement.</p>
                    <p>"Personal Information" means all information about the Member provided to Panchshil Realty via on-line forms at the Site or by any other means of communication, whether electronic, oral or written.</p>
                    <p>"Site" with all its grammatical variations refers to the web site hosted on the Internet/World Wide Web with the address of www.panchshil.com or such other address as may periodically be assigned to or adopted by Panchshil Realty.</p>
                    <p><b>INFORMATION WE COLLECT ABOUT YOU AND HOW WE COLLECT IT</b></p>
                    <p>We collect several types of information from and about users of our Website, including information:</p>
                    <ul>
                        <li>by which you may be personally identified, such as name, postal address, e-mail address, passport number, property ID or telephone number ("personal information")</li>
                        <li>that is about you but individually does not identify you; and/or about your internet connection, the equipment you use to access our Website and usage details.</li>
                    </ul>
                    <p>We collect this information:</p>
                    <ul>
                        <li>Directly from you when you provide it to us.</li>
                        <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses and information collected through cookies, web beacons and other tracking technologies.</li>
                        <li>From third parties, for example, our business partners.</li>
                    </ul>
                    <p><b>INFORMATION YOU PROVIDE TO US.</b></p>
                    <p>The information we collect on or through our Website may include:</p>
                    <ul>
                        <li>Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, registering for newsletter, using the &lsquo;contact us&rsquo; form, using the &lsquo;We Care form&rsquo;, using the careers portal or requesting further services.</li>
                        <li>We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Website.</li>
                        <li>Records and copies of your correspondence (including e-mail addresses), if you contact us.</li>
                        <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
                        <li>Details of transactions you carry out through our Website and of the fulfilment of your orders. You may be required to provide financial information before placing an order or making payment through our Website.</li>
                        <li>Your search queries on the Website.</li>
                    </ul>
                    <p><b>USAGE DETAILS, IP ADDRESSES, COOKIES AND OTHER TECHNOLOGIES</b></p>
                    <p>As you navigate through and interact with our Website, we may automatically collect certain information about your equipment, browsing actions and patterns, including:</p>
                    <ul>
                        <li>Details of your visits to our Website, including traffic data, location data, logs and other communication data and the resources that you access and use on the Website.</li>
                        <li>Information about your computer and internet connection, including your IP address, operating system and browser type.</li>
                    </ul>
                    <p>The information we collect automatically is statistical data. It helps us to improve our Website and to deliver a better and more personalized service by enabling us to:</p>
                    <ul>
                    <li>Estimate our audience size and usage patterns.</li>
                    <li>Store information about your preferences, allowing us to customize our Website according to your individual interests. Speed up your searches.</li>
                    <li>Recognize you when you return to our Website.</li>
                    </ul>
                    <p>The technologies we use for this automatic data collection may include:</p>
                    <ul>
                    <li>Cookies (or browser cookies)</li>
                    </ul>
                    <p>A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.</p>
                    <ul>
                        <li>Flash Cookies</li>
                    </ul>
                    <p>Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies.</p>
                    <ul>
                        <li>Web Beacons</li>
                    </ul>
                    <p>Pages of our the Website and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs. pixel tags and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an e-mail and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).&nbsp;</p>
                    <p><b>HOW WE USE YOUR INFORMATION</b></p>
                    <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                    <ul>
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information or services that you request from us.</li>
                        <li>To fulfil any other purpose for which you provide it.</li>
                        <li>To provide you with notices, including expiration, billing and renewal notices.</li>
                        <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
                        <li>To notify you about changes to our Website or any project or services we offer or provide.</li>
                        <li>To allow you to participate in interactive features on our Website.</li>
                        <li>In any other way we may describe when you provide the information.</li>
                        <li>For any other purpose with your consent.</li>
                    </ul>
                    <p>We may also use your information to contact you about our own and third-parties' projects and services that may be of interest to you. If you do not want us to use your information in this way, please contact us at&nbsp;info@panchshil.com.</p>
                    <p><b>DISCLOSURE OF YOUR INFORMATION</b></p>
                    <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>
                    <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                    <ul>
                    <li>To our subsidiaries and affiliates.</li>
                    <li>To contractors, service providers and other third parties we use to support our business.</li>
                    <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of the Company's assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by the Company about our Website users is among the assets transferred.</li>
                    <li>To fulfil the purpose for which you provide it.</li>
                    <li>For any other purpose disclosed by us when you provide the information. With your consent.</li>
                    </ul>
                    <p>We may also disclose your personal information:</p>
                    <ul>
                    <li>To comply with any court order, law or legal process, including to respond to any government or regulatory request.</li>
                    <li>To enforce or apply our terms of use or terms of sale and other agreements, including for billing and collection purposes.</li>
                    <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.</li>
                    </ul>
                    <p><b>ACCESSING AND CORRECTING YOUR INFORMATION</b></p>
                    <p>You can review and change your personal information by logging into the Website e-services. You may also request to update any personal information we hold about you by contacting us at&nbsp;info@panchshil.com.</p>
                    <p><b>INDEMNITY</b></p>
                    <p>The Member agrees and undertakes to indemnify and hereby indemnifies and keeps safe and harmless Panchshil Realty from all loss, claim, demand, damage, costs, charges (including legal fees and charges) or prejudice that may be caused on account of the Member&rsquo;s use of the Service offered by Panchshil Realty at the site. The Member agrees and undertakes to indemnify and hereby indemnifies and keeps safe and harmless Panchshil Realty from all loss, claim, demand, damage, costs, charges (including legal fees and charges) or prejudice that may be caused on account of the Member&rsquo;s default or breach of any of the terms of this Agreement.</p>
                    <p><b>CHANGES TO OUR PRIVACY POLICY</b></p>
                    <p>It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.</p>
                </div>
            </div>
        </section>
        <section className={`fixed top-0 left-0 bg-black/50 z-10 w-full h-screen overflow-y-auto pt-30 pb-10 flex justify-center transtion-all origin-center duration-200 text-white font-galaxie-polaris-light ${disclaimerPopUp ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0'}`}>
            <div className="w-[900px] relative bg-contain bg-center h-fit" style={{backgroundImage: `url(${basePath}/images/modal-bg.jpg)`}}>
                <IoMdClose onClick={() => { updateDisclaimerPopUp(false); startBodyScroll(); }} className="absolute top-10 right-5 cursor-pointer text-[#d1aa6c]" size={25} />
                <div className="pt-15 pb-5">
                    <h2 className="uppercase border-b border-[#d1aa6c] pb-1 w-fit mx-auto text-4xl tracking-[1px]">Disclaimer</h2>
                </div>
                <div className="text-[#cecbcb] px-15 py-10 flex flex-col gap-3">
                    <ul className="flex flex-col gap-3 list-disc">
                        <li>This project was completed before May 1, 2017 prior to the commencement of MahaRERA compliance requirements.</li>
                        <li>All rights and titles to www.trumptowerspune.com (&ldquo;Website&rdquo; which term shall include any related mobile applications) vest in&nbsp;Panchshil Realty and Developers Pvt. Ltd. (&ldquo;The&nbsp;Company&rdquo;) and/or its affiliates and subsidiaries for visitor&rsquo;s (&ldquo;Visitor&rdquo;) informational purposes only, subject to these terms and conditions and all modifications thereto (&ldquo;T&amp;C).</li>
                        <li>Trump&reg; Towers Pune is not owned, developed or sold by The Trump Organization or any of their current or former principals or affiliates. Panchshil Realty and Developers Private Limited, the owner and developer of the property (in association with Premsagar Infra Realty Private Limited), uses the &ldquo;Trump&rdquo; name and mark under license, which license may be terminated or revoked according to its terms.</li>
                        <li>Panchshil Realty and Developers Pvt. Ltd. (PRDPL) makes all reasonable efforts to include accurate and up-to date information in this website. However, PRDPL does not make any warranties or representations, expressed or implied, as to the timeliness, accuracy or completeness of the information contained or referred to in this website. Therefore, any advice or information received via this material should not be acted upon without consulting our sales team.</li>
                        <li>References to any products, features or services are to be read as statements of fact and not as their endorsement or recommendation by PRDPL. Further, PRDPL reserves the right to make any changes in any way, at any time and for any reason, without prior notice, to the contents and information provided in this website, including materials, equipment, specifications and/or availability. It is clearly understood that dimensions and floor plan layouts are approximate and illustrations are design concepts only. Images are for illustrative purpose only and views rendered are representational and not intended to reflect actual views.</li>
                        <li>Except with specific prior permission of PRDPL, any reproduction, re-transmission or other use of any information, proprietary or otherwise in this website is strictly prohibited. Copyright in all the designs, plans, views shared in this website shall remain the property of PRDPL and cannot be used on any other work except by Agreement with PRDPL.</li>
                        <li>Any use of this content and any legal dispute arising in connection therewith shall exclusively be governed by Indian law and all arbitration shall fall within the jurisdiction of Pune Courts.</li>
                    </ul>
                </div>
            </div>
        </section>
        <footer className="py-5 flex flex-col gap-5 px-30 justify-center items-center uppercase">
            <div className="flex justify-between border-b border-[var(--foreground)] w-full px-20 py-4 font-galaxie-polaris-medium text-xs tracking-[2px]">
                <span className="cursor-pointer" onClick={() => { updatePrivacyPolicyPopUp(true); stopBodyScroll()}}>Privacy Policy</span>
                <ul className="flex gap-40">
                    <li>
                        <Link href="https://www.facebook.com/panchshilrealty/" target="_blank">
                            <FaFacebookF className="color-foreground" size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/company/panchshilrealty/" target="_blank">
                            <FaLinkedinIn className="color-foreground" size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com/user/panchshilrealtypune" target="_blank">
                            <FaYoutube className="color-foreground" size={20} />
                        </Link>
                    </li>
                </ul>
                <span className="cursor-pointer" onClick={() => { updateDisclaimerPopUp(true); stopBodyScroll(); }}>Disclaimer</span>
            </div>
            <h3 className="font-galaxie-polaris-light tracking-[1px]">Seeded By <Link href="https://www.theneontree.in/" target="_blank" className="text-white">The Neon Tree</Link></h3>
        </footer>
        </>
    )
}