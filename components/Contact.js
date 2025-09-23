import Link from "next/link";

export default function Features() {
  return (
    <>  
<div className="w-full bg-gradient-to-br from-[#f3f2ec] via-[#f6f5f0] to-[#efece3] py-16 md:py-24">
  <div className="mx-auto max-w-6xl px-4">
    <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md ring-1 ring-black/5 shadow-xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_0%_0%,#fff,transparent_40%),radial-gradient(1200px_circle_at_100%_100%,#f5efe0,transparent_40%)]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-14">
        <div className="flex flex-col justify-center">
          <p className="text-sm tracking-widest text-[#ab8c52] uppercase mb-3">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#1a1a1a]">
            Looking for a special product?
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#4a4a4a]">
            Need assistance or want to order in bulk? Our team is here to help you find the perfect match and tailor solutions for your needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3 text-white font-semibold hover:bg-[#2a2a2a] transition-colors">Get in touch</Link>
            <a href="mailto:hello@zayana.com" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-[#1a1a1a] font-semibold hover:border-black/20 transition-colors">Email us</a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-[#6b6b6b]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#CBAB58]" />
              <span>Wholesale & B2B support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#CBAB58]" />
              <span>Customized recommendations</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="h-full w-full rounded-2xl border border-black/5 bg-white/50 p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-sm text-[#6b6b6b]">Phone</p>
                <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">+961 78 808 100</p>
              </div>
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-sm text-[#6b6b6b]">Email</p>
                <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">hello@zayana.com</p>
              </div>
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-sm text-[#6b6b6b]">Response time</p>
                <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}