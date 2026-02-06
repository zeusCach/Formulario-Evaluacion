import '/src/style.css'

export function successModal(mensaje) {
    //creacion del modal

    const modal = document.createElement('div');
    modal.className = `fixed top-6 left-1/2 -translate-x-1/2  z-[9999] animate-slide-down
`


    modal.innerHTML = `

    <div class="bg-cyan-900 rounded-2xl shadow-2xl p-8 w-[420px] animate-scale-in">
          
        <div class="flex items-center gap-2.5 mb-2"> 
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100">
                <svg class="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div> 

            <h3 class="text-2xl font-bold text-white">¡Éxito!</h3>
        </div>

        <p class="text-white mb-6">${mensaje}</p>
    </div>
`

    //Agregamos al DOM
    document.body.appendChild(modal);


    // // Cerrar al hacer click fuera
    setTimeout(() => modal.remove(), 3500);

}
