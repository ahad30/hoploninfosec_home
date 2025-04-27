const Footer = () => {
  return (
    <div>
        <footer className="bg-[#350057] text-white">
      <div className="container mx-auto px-4 py-8">
        

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <div className="text-start mb-12 lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Start Using Hoplon Now.</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Not protected has never been more effective. This advantage of our
            services is urgent. Its most popular solution for your business:
          </p>
          <ul className="space-y-2 list-disc mb-8">
            <li>Private agents continue with projects security.</li>
            <li>Online agents refuse on your clients directly with our Mobile Security.</li>
            <li>Private your Enable site out Email Security.</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Schedule a Consultation
          </button>
        </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>Al-Debue Automated Red Tenting</li>
              <li>Cloud Storage and Disaster</li>
              <li>Recovery</li>
              <li>Email Security and not globally</li>
              <li>Mobile Security</li>
              <li>Endpoint Security</li>
              <li>Deep and Dash Web Monitoring</li>
              <li>2026 Standard Deviation & Response</li>
              <li>Training Software</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Protection Testing</li>
              <li>Cybersecurity Compliance</li>
              <li>Offensive Security</li>
              <li>Cybersecurity Connections and Training</li>
              <li>Indoor/ Response and Digital Features Investigators</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>About Hoplon Helms</li>
              <li>Cleaners</li>
              <li>Partners</li>
              <li>Events</li>
              <li>Our Team</li>
            </ul>
          </div>


        </div>
<div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <ul className="flex text-[10px] lg:text-base items-center space-x-4">
              <li>Contact Us</li>
              <li>Contact Policy</li>
              <li>Primary Policy</li>
            </ul>
          </div>
  
<div className="">
          <p>Copyright © Hoplon Airlines, LLC, and its group of companies.</p>
        </div>
</div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
