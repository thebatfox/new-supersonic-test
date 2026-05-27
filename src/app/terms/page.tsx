import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Supersonic Customs',
  description: 'Terms and Conditions of Sale and Service for Supersonic Customs (Pty) Ltd. Version 2.0, effective January 2026.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <img src="/nav-logo.png" alt="Supersonic Customs" className="h-12 w-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms & Conditions of Sale and Service</h1>
          <p className="text-gray-400">Version 2.0 | Effective January 2026</p>
          <div className="mt-4 text-gray-400 text-sm">
            <p>Supersonic Customs (Pty) Ltd | Reg. 2018/044702/07 | VAT: 4820285726</p>
            <p>25B Gray Rd, Paarden Eiland, Cape Town, 7405</p>
            <p>info@supersonicafrica.co.za | +27 21 203 0054</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10 text-gray-700">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">These Terms and Conditions ("Agreement") govern all quotations, sales, installations, and services provided by Supersonic Customs (Pty) Ltd ("Supersonic Customs", "the Company", "we", or "us") to the Customer. By accepting a quotation, placing an order, paying a deposit, or permitting work to commence, the Customer agrees to be bound by this Agreement in its entirety. No verbal representations, understandings, or prior arrangements shall form part of this Agreement.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">2. Definitions</h2>
            <ul className="space-y-2 leading-relaxed">
              {[
                ['Company / Supersonic Customs', 'Supersonic Customs (Pty) Ltd, Reg. 2018/044702/07.'],
                ['Customer', 'Any individual, company, or entity purchasing goods or services from Supersonic Customs.'],
                ['Goods / Products', 'Soundproofing materials, acoustic panels, acoustic foam, doors, and any other physical items supplied.'],
                ['Services', 'Installation, consultation, project management, delivery, and any related acoustic services.'],
                ['Contract', 'The binding agreement formed between Supersonic Customs and the Customer upon acceptance of a quotation or commencement of work.'],
                ['Business Days', 'Monday to Friday, excluding South African public holidays.'],
                ['Deposit', 'The upfront payment required to confirm and commence an order.'],
                ['Snag List', 'A written list of defects or incomplete items submitted by the Customer within 3 business days of project completion.'],
                ['Custom Goods', 'Any goods manufactured, cut, printed, or otherwise specially prepared to the Customer\'s specifications.'],
                ['E&OE', 'Errors and Omissions Excepted.'],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-2">
                  <span className="font-semibold text-gray-800 min-w-fit">{term}:</span>
                  <span>{def}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">3. Quotations and Orders</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed">
              <li>All quotations are valid for 30 days from the date of issue, unless otherwise stated in writing, and are subject to the availability of stock and materials.</li>
              <li>Prices are quoted exclusive of VAT unless expressly stated otherwise. VAT at the prevailing rate will be added to all invoices.</li>
              <li>All quotations are subject to E&OE. Supersonic Customs reserves the right to correct any errors or omissions in a quotation before or after acceptance, and shall notify the Customer of any such corrections promptly.</li>
              <li>A verbal, telephonic, or informal "go ahead" does not constitute an official order. An order is only deemed placed upon receipt of a written purchase order or written confirmation, accompanied by the required deposit.</li>
              <li>Quantities and dimensions stated in quotations are estimates based on information provided by the Customer. The Customer is responsible for verifying all quantities and measurements prior to accepting the quotation. Supersonic Customs shall not be liable for shortfalls arising from Customer-provided measurements that prove to be inaccurate.</li>
              <li>Any additional materials or services not specified in the original quotation will require a revised written quotation prior to the additional work being performed. Supersonic Customs shall not proceed with additional work without written authorisation from the Customer.</li>
              <li>Should imported stock be required to fulfil an order, pricing may be subject to change due to currency fluctuation or supply changes. Prices are only fixed and stock secured once a written order and deposit have been received.</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">4. Payment Terms</h2>
            <h3 className="font-semibold text-gray-800 mb-3">4.1 Standard Payment Structure</h3>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={8}>
              <li>For supply, manufacture, and installation projects, the following deposit structure applies unless otherwise agreed in writing:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>75% deposit is required upon placement of order to confirm and commence production or procurement.</li>
                  <li>15% progress payment is required prior to delivery of goods to site.</li>
                  <li>Final 10% balance is due on the day of project completion.</li>
                </ul>
              </li>
              <li>For supply-only orders (no installation): Full payment is required prior to dispatch or collection.</li>
              <li>For the callout / site inspection fee: Full payment is due upon receipt of invoice. Where a project valued at over R5,000 is subsequently confirmed, a portion of the callout fee will be credited toward the deposit.</li>
              <li>No goods will be released, dispatched, or delivered until all required payments are reflecting in Supersonic Customs' account.</li>
              <li>If a project extends beyond 5 consecutive working days on site, pro-rata progress payments may be required at 5-day intervals, as agreed in writing prior to commencement.</li>
            </ol>
            <h3 className="font-semibold text-gray-800 mt-6 mb-3">4.2 Late Payments</h3>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={13}>
              <li>Overdue amounts will attract interest at the rate prescribed under the Prescribed Rate of Interest Act 55 of 1975, as amended from time to time, calculated from the due date until the date of payment in full.</li>
              <li>In addition to statutory interest, Supersonic Customs may charge a late payment administration fee of R250.00 (excl. VAT) for each month or part thereof that a payment remains outstanding.</li>
              <li>Supersonic Customs reserves the right to suspend or terminate services, withhold goods, or reclaim installed materials where payment is outstanding and not remedied within 7 days of written notice.</li>
              <li>The Customer shall be liable for all reasonable legal costs, collection fees, and disbursements incurred by Supersonic Customs in recovering any outstanding amounts.</li>
            </ol>
            <h3 className="font-semibold text-gray-800 mt-6 mb-3">4.3 Retention of Title and Handover of Access</h3>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={17}>
              <li>All goods, materials, and equipment supplied by Supersonic Customs remain the sole property of Supersonic Customs until full and final payment has been received and cleared. Risk of loss or damage passes to the Customer upon delivery to site.</li>
              <li>No keys, access codes, passwords, PIN numbers, remote controls, or access cards will be handed over to the Customer until full and final payment has been received.</li>
              <li>Where Supersonic Customs holds the Customer's keys or access devices during the course of a project, these will be returned upon receipt of full and final payment.</li>
              <li>Should any goods be repossessed by Supersonic Customs due to non-payment, the costs of repossession, including transport and any damages incurred, will be for the Customer's account.</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">5. Lead Times and Delivery</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={21}>
              <li>Lead times are estimates only and commence from the date of receipt of the required deposit and any necessary written approvals.</li>
              <li>Indicative lead times (subject to change):
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>Standard acoustic panels and materials: 3 to 5 business days from deposit.</li>
                  <li>Printed / custom artwork panels: 10 to 15 business days from deposit and approved artwork file.</li>
                  <li>Acoustic doors: 3 to 6 weeks from deposit and written door specification sign-off.</li>
                  <li>Allow an additional 2 to 3 business days for delivery once goods are ready.</li>
                </ul>
              </li>
              <li>Supersonic Customs shall not be liable for delays caused by third-party couriers, suppliers, or circumstances beyond its reasonable control including load shedding, supplier delays, or extreme weather events.</li>
              <li>The Customer is responsible for ensuring the delivery address is correct and that someone is available to receive and inspect goods. Re-delivery costs arising from failed deliveries will be for the Customer's account.</li>
              <li>The Customer must inspect all goods upon delivery and report any visible damage, shortages, or discrepancies in writing within 3 business days of delivery. Failure to do so will be deemed acceptance of the goods in good condition.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">6. Installation and On-Site Services</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={26}>
              <li>All installation services will be carried out during normal business hours (Monday to Friday, 08h00 to 17h00), unless otherwise agreed in writing.</li>
              <li>The Customer is responsible for ensuring that:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-600">
                  <li>The work area is clear of furniture, equipment, and personal belongings before Supersonic Customs' team arrives. Should the team be required to move items, any resulting delay will be charged at R450.00 per hour (excl. VAT).</li>
                  <li>Suitable electrical power supply and adequate lighting are available at the site for the duration of the installation.</li>
                  <li>Free and unobstructed access to all relevant areas of the site is provided for the duration of the project.</li>
                </ul>
              </li>
              <li>Paint is not included in the price unless explicitly stated in the quotation. Where a specific paint colour is required, the Customer must provide the correct paint codes in writing before commencement.</li>
              <li>Any additional time spent on site beyond the estimated project duration, where not caused by Supersonic Customs, will be charged at R450.00 per hour (excl. VAT) per team member on site.</li>
              <li>Any changes, additions, or alterations to the agreed scope of work after acceptance of the quotation will be treated as a variation and will require a revised written quotation before any additional work is performed.</li>
              <li>Should the Customer require Supersonic Customs to remove materials from site that it did not bring onto site, a removal fee of R650.00 per bakkie load (excl. VAT) will be charged.</li>
              <li>The desired placement of all fixed electrical points, light switches, and control panels must be confirmed in writing before commencement. Remedial work to reposition fixtures after installation will be charged at R450.00 per hour (excl. VAT).</li>
            </ol>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">7. Returns, Cancellations, and Custom Goods</h2>
            <h3 className="font-semibold text-gray-800 mb-3">7.1 Returns</h3>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={33}>
              <li>Standard (non-custom) goods may only be returned for a refund if: returned within 14 days of invoice or delivery date; in original undamaged packaging; unused and in as-new condition; return transport costs borne by the Customer; and subject to a 15% handling and restocking fee.</li>
              <li>Goods that have been partially used, installed, or damaged will not be accepted for return.</li>
            </ol>
            <h3 className="font-semibold text-gray-800 mt-4 mb-3">7.2 Custom Goods</h3>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={35}>
              <li>Custom-made goods, including specially cut materials, printed acoustic panels, custom artwork panels, and acoustic doors manufactured to specific dimensions, may not be returned for a refund under any circumstances once production has commenced.</li>
            </ol>
            <h3 className="font-semibold text-gray-800 mt-4 mb-3">7.3 Cancellations</h3>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={36}>
              <li>The Customer may cancel an order in writing prior to production or procurement commencing, subject to a reasonable cancellation fee.</li>
              <li>Cancellations after production or procurement has commenced will result in forfeiture of the deposit. Where actual costs incurred by Supersonic Customs exceed the deposit, the Customer remains liable for the balance.</li>
              <li>Supersonic Customs reserves the right to cancel an order if the required deposit or progress payment is not received within 7 days of the due date.</li>
            </ol>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">8. Snag List and Defect Remediation</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={39}>
              <li>Within 3 business days of the completion of services, the Customer may submit a written snag list detailing any defects in the completed work. No verbal snag lists will be accepted.</li>
              <li>Upon receipt of a valid snag list, Supersonic Customs shall be afforded 10 business days to remedy the items raised. The Customer must provide free and unhindered access to site during this period.</li>
              <li>Should no snag list be submitted within the 3-business-day window, the project will be deemed accepted in full.</li>
              <li>The snag list process is the exclusive remedy for defects in workmanship and does not entitle the Customer to withhold any outstanding payment.</li>
            </ol>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">9. Warranty and Limitation of Liability</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={43}>
              <li>Supersonic Customs provides a 90-day workmanship warranty from the date of project completion, covering defects directly attributable to Supersonic Customs' installation or workmanship.</li>
              <li>The warranty does not cover: fair wear and tear or damage caused by misuse; defects in the Customer's existing building structure; products or materials supplied by third parties; or damage to the Customer's furniture or equipment during installation, except where caused by Supersonic Customs' gross negligence.</li>
              <li>Due to the nature of acoustic foam and flexible acoustic products, minor irregularities in wall or ceiling lines are an inherent characteristic of the product and do not constitute a defect.</li>
              <li className="font-medium text-gray-800">IMPORTANT — NO GUARANTEE OF ACOUSTIC PERFORMANCE: Due to the complex and variable nature of acoustics, Supersonic Customs cannot guarantee any specific level of sound reduction, soundproofing effectiveness, or acoustic performance. Sound attenuation is influenced by numerous factors beyond Supersonic Customs' control. The Customer accepts that results will vary and that no acoustic treatment can guarantee complete silence or a specific dB reduction.</li>
              <li>Supersonic Customs' total liability under or in connection with this Agreement shall not exceed the total value of the goods and services supplied under the relevant quotation.</li>
              <li>Supersonic Customs shall not be liable for any indirect, consequential, special, or punitive loss or damages of any nature, including loss of profit, loss of use, or loss of business opportunity.</li>
              <li>Supersonic Customs will take reasonable steps to ensure that mess created during installation is managed. The Customer accepts responsibility for thorough post-installation cleaning of the work area.</li>
            </ol>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">10. Site Conditions and Customer Responsibilities</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={50}>
              <li>The Customer warrants that all information provided regarding the site, dimensions, existing structures, and intended use is accurate and complete.</li>
              <li>The Customer is responsible for obtaining all necessary permissions, approvals, and consents (including from body corporates, landlords, or local authorities) prior to commencement of work.</li>
              <li>Supersonic Customs is not responsible for pre-existing defects, faults, or damage to the Customer's premises discovered during the course of the project.</li>
            </ol>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">11. After-Hours, Weekend, and Holiday Work</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={53}>
              <li>All services are rendered during normal business hours (Monday to Friday, 08h00 to 17h00), excluding South African public holidays.</li>
              <li>Should the Customer require work to be performed outside of these hours, the applicable after-hours rate must be agreed upon in writing by both parties prior to commencement.</li>
            </ol>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">12. Breach and Remedies</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={55}>
              <li>Should either party breach any term of this Agreement, the aggrieved party shall be entitled to deliver written notice requiring the breach to be remedied within 7 business days.</li>
              <li>If the breach is not remedied within the stated period, the aggrieved party may suspend performance, cancel the Agreement, and/or claim damages.</li>
              <li>In the event of cancellation for breach by the Customer, the Customer shall remain liable for all costs incurred by Supersonic Customs up to the date of cancellation, including materials procured, labour performed, and reasonable loss of profit.</li>
            </ol>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">13. Dispute Resolution</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={58}>
              <li>In the event of any dispute, the parties agree to first attempt resolution through good-faith negotiation within 10 business days of written notice of the dispute.</li>
              <li>If the dispute remains unresolved after negotiation, the parties agree to refer it to mediation through a mutually agreed mediator.</li>
              <li>If mediation fails, the matter shall be resolved by arbitration in accordance with the rules of the Arbitration Foundation of Southern Africa (AFSA), unless either party elects to approach a court of competent jurisdiction.</li>
              <li>The Customer consents to the jurisdiction of the Magistrate's Court for the district in which Supersonic Customs' registered office is situated.</li>
            </ol>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">14. Confidentiality</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={62}>
              <li>Both parties agree to keep confidential all proprietary, commercially sensitive, or personal information shared in connection with this Agreement, for a period of 5 years following termination of the Agreement.</li>
              <li>Neither party shall disclose such information to any third party without the prior written consent of the disclosing party, except where required by law or court order.</li>
            </ol>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">15. Intellectual Property</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={64}>
              <li>All designs, drawings, specifications, artwork, and technical documentation prepared by Supersonic Customs remain the intellectual property of Supersonic Customs unless otherwise agreed in writing.</li>
              <li>The Customer may not reproduce, share, or use such materials for any purpose other than the project to which they relate without Supersonic Customs' prior written consent.</li>
              <li>Where the Customer supplies artwork or images for use on printed panels or custom products, the Customer warrants that they hold the necessary rights to use such material, and indemnifies Supersonic Customs against any third-party intellectual property claims.</li>
            </ol>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">16. Force Majeure</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={67}>
              <li>Supersonic Customs shall not be liable for any delay or failure to perform its obligations arising from events beyond its reasonable control, including but not limited to load shedding, natural disasters, labour action, government restrictions, supplier delays, or material shortages.</li>
            </ol>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">17. Privacy and Data</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={68}>
              <li>Supersonic Customs will process the Customer's personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). Personal information will only be used for the purposes of fulfilling the Agreement and will not be shared with third parties without the Customer's consent, except where required by law.</li>
            </ol>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">18. Governing Law and Jurisdiction</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={69}>
              <li>This Agreement is governed by the laws of the Republic of South Africa.</li>
              <li>The parties agree that the courts of Cape Town shall have jurisdiction over all disputes arising from this Agreement.</li>
              <li>These Terms and Conditions are subject to the provisions of the Consumer Protection Act 68 of 2008 and the National Credit Act 34 of 2005, to the extent applicable.</li>
            </ol>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">19. General Provisions</h2>
            <ol className="list-decimal list-inside space-y-3 leading-relaxed" start={72}>
              <li>These Terms and Conditions, together with any written quotation or agreement, constitute the entire agreement between the parties and supersede all prior representations, understandings, and agreements.</li>
              <li>No amendment to this Agreement shall be of any force or effect unless made in writing and signed by both parties.</li>
              <li>If any provision of this Agreement is found to be invalid, unlawful, or unenforceable, it shall be severed from the Agreement, and the remaining provisions shall continue in full force and effect.</li>
              <li>Supersonic Customs' failure to enforce any provision of this Agreement shall not constitute a waiver of its rights to enforce that or any other provision in the future.</li>
              <li>All rates, fees, and charges specified in these Terms and Conditions reflect Supersonic Customs' standard rates as at the effective date. Supersonic Customs reserves the right to revise any such rate at any time by providing written notice to the Customer.</li>
              <li>This document is subject to revision without prior notice. The version attached to or referenced in a specific quotation or invoice shall apply to that transaction.</li>
            </ol>
          </section>

          {/* Acceptance */}
          <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Acceptance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">By accepting a quotation, placing an order, paying a deposit, or permitting work to commence, the Customer confirms that they have read, understood, and agree to be bound by these Terms and Conditions of Sale and Service.</p>
            <p className="text-gray-500 text-sm">For a signed copy of this agreement, please contact us at <a href="mailto:info@supersonicafrica.co.za" className="text-blue-600 hover:underline">info@supersonicafrica.co.za</a></p>
          </section>

          {/* Footer CTA */}
          <div className="text-center pt-8 pb-4 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4">Questions about our terms? Get in touch.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book-site-visit" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Book a Site Visit
              </Link>
              <a href="https://wa.me/27767702767" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                💬 WhatsApp Us
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-6">Supersonic Customs (Pty) Ltd | Reg. 2018/044702/07 | VAT: 4820285726 | 25B Gray Rd, Paarden Eiland, Cape Town</p>
          </div>

        </div>
      </div>
    </div>
  );
}
