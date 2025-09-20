

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b4f4a] via-[#1a756f] to-[#2a9b94] border-t border-slate-600 py-8 mt-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <img src="home-logo.png" className=" h-24 w-26" />
              <h3 className="text-lg font-bold text-white">MedLock</h3>
            </div>
            <p className="mb-2">
              Your trusted centralized medical report system
            </p>
            <p className="text-sm text-emerald-400">
              Secure • Reliable • Always Accessible
            </p>
            <div className="mt-4 pt-4 border-t border-slate-600">
              © 2023 MedLock. All rights reserved. | Privacy Policy | Terms of
              Service
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;