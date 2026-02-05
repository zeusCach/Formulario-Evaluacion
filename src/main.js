import './style.css'


document.querySelector('#app').innerHTML = `
  <div class="flex items-center justify-center min-h-screen " >

      <div class="  bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 class="text-2xl font-bold text-slate-700 mb-6">Contact Us</h1>


        <form id="contactForm" class="space-y-5">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <label class="block text-sm text-slate-600 mb-1">First Name <span class="text-emerald-600">*</span></label>
            <input name="firstName" type="text" required class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          <div>
          <label class="block text-sm text-slate-600 mb-1">Last Name <span class="text-emerald-600">*</span></label>
          <input name="lastName" type="text" required class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          </div>


    
        <div>
        <label class="block text-sm text-slate-600 mb-1">Email Address <span class="text-emerald-600">*</span></label>

        <input name="email" type="email" required class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>

    
        <div>
          <label class="block text-sm text-slate-600 mb-2">Query Type <span class="text-emerald-600">*</span></label>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <label class="flex items-center gap-3 border border-slate-300 rounded-lg p-3 cursor-pointer hover:border-emerald-400">

            <input type="radio" name="query" value="General" class="accent-emerald-600" />
            <span class="text-sm">General Enquiry</span>
            
            </label>

            <label class="flex items-center gap-3 border border-slate-300 rounded-lg p-3 cursor-pointer hover:border-emerald-400">

            <input type="radio" name="query" value="Support" class="accent-emerald-600" />
            <span class="text-sm">Support Request</span>

            </label>
           </div>
        </div>


        
        <div>
          <label class="block text-sm text-slate-600 mb-1">Message <span class="text-emerald-600">*</span></label>

          <textarea name="message" required rows="5" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400">

          </textarea>

        </div>


        <label class="flex items-center gap-3 text-sm text-slate-600">

          <input name="consent" type="checkbox" required class="accent-emerald-600" />
          I consent to being contacted by the team <span class="text-emerald-600">*</span>
          
        </label>


   
        <button type="submit" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold transition">
          Submit
        </button>


    </form>
    </div>
      
  </div>
`

