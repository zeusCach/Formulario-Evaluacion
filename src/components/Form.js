import '/src/style.css'

export const FormComponent = `
  <div class="flex justify-center m-10">
      <div class=" bg-white rounded-2xl shadow-xl p-6 sm:p-10">
        <h1 class="text-2xl font-bold text-slate-700 mb-6">Contactanos</h1>
        <form id="contactForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <label class="block text-sm text-slate-600 mb-1">Nombre <span class="text-emerald-600">*</span></label>
            <input name="firstName" type="text" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          <div>
          <label class="block text-sm text-slate-600 mb-1">Apellido <span class="text-emerald-600">*</span></label>
          <input name="lastName" type="text" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          </div>
    
        <div>
        <label class="block text-sm text-slate-600 mb-1">Dirección de correo electrónico<span class="text-emerald-600">*</span></label>
        <input name="email" type="email" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>
    
        <div id="queryTypeContainer">
          <label class="block text-sm text-slate-600 mb-2">Tipo de consulta<span class="text-emerald-600">*</span></label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="flex items-center gap-3 border border-slate-300 rounded-lg p-3 cursor-pointer hover:border-emerald-400">
            <input type="radio" name="query" value="General" class="accent-emerald-600" />
            <span class="text-sm">Consulta general</span>
            </label>
            <label class="flex items-center gap-3 border border-slate-300 rounded-lg p-3 cursor-pointer hover:border-emerald-400">
            <input type="radio" name="query" value="Support" class="accent-emerald-600" />
            <span class="text-sm">Solicitud de soporte</span>
            </label>
           </div>
        </div>
        
        <div>
          <label class="block text-sm text-slate-600 mb-1">Mensaje<span class="text-emerald-600">*</span></label>
          <textarea name="message" rows="4" class="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"></textarea>
        </div>

        <div id="consentContainer">
          <label class="flex items-center gap-3 text-sm text-slate-600">
            <input name="consent" type="checkbox" class="accent-emerald-600" />
            Doy mi consentimiento para que el equipo se ponga en contacto conmigo<span class="text-emerald-600">*</span>
          </label>
        </div>
   
        <button type="submit" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold transition">
          Enviar
        </button>
    </form>
    </div>
  </div>
`