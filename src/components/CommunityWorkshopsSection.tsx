import React from 'react';
import workshopImage from '../assets/images/oficina_reparo_comunitaria_1791041813540.jpg';

interface CommunityWorkshopsSectionProps {
  onOpenWorkshopModal: () => void;
}

export const CommunityWorkshopsSection: React.FC<CommunityWorkshopsSectionProps> = ({
  onOpenWorkshopModal,
}) => {
  const events = [
    {
      date: 'Sábado, 24 de Outubro',
      time: '09h às 12h',
      place: 'Laboratório de Eletrônica · Campus IFSC',
      status: 'Inscrições abertas',
    },
    {
      date: 'Quarta-feira, 11 de Novembro',
      time: '14h às 17h',
      place: 'Espaço Maker Comunitário · IFSC',
      status: 'Vagas limitadas',
    },
  ];

  return (
    <section id="oficinas" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-800 shadow-2xs mb-3">
            <span>🛠️ Encontros Comunitários de Reparo · Estilo Restart Party</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D3828] tracking-tight leading-tight">
            Não jogue fora: venha aprender a consertar.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Inspiradas nas <em>Restart Parties</em> mundiais, nossas oficinas abertas transformam o laboratório do IFSC em um ponto de encontro comunitário. Você traz sua lâmpada LED que parou de funcionar e nossos estudantes e professores ensinam passo a passo como recuperá-la.
          </p>
        </div>

        {/* Main Grid: Image + Event Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Workshop Photo */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group flex flex-col justify-between bg-slate-900">
            <img
              src={workshopImage}
              alt="Oficina comunitária de reparo de eletrônicos no IFSC"
              referrerPolicy="no-referrer"
              className="w-full h-full min-h-[340px] object-cover group-hover:scale-102 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-display font-bold text-xs inline-block">
                Ação 100% Gratuita
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Bancada Aberta: Conhecimento compartilhado na prática
              </h3>
              <p className="text-xs text-gray-200 font-normal max-w-lg">
                Você não precisa de conhecimento prévio em eletrônica. Oferecemos ferramentas, bancada com proteção e suporte individualizado.
              </p>
            </div>
          </div>

          {/* Right Column: Workshop Steps & Next Sessions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* 3 Steps of a Restart Party */}
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-emerald-100/80 space-y-4">
              <h4 className="text-sm font-display font-bold text-gray-900 uppercase tracking-wide">
                Como funciona a oficina:
              </h4>

              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-gray-900 block">Traga suas lâmpadas defeituosas</strong>
                    <span>Queimadas, piscando ou com brilho fraco (sem o vidro quebrado).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-gray-900 block">Sente-se à bancada com os estudantes</strong>
                    <span>Use o multímetro, teste diodo por diodo e descubra a causa exata da falha.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-gray-900 block">Recupere e leve para casa</strong>
                    <span>Faça o reparo com solda de proteção e teste na lâmpada série antes de voltar a usar.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Dates Box */}
            <div className="p-6 rounded-2xl bg-[#FFF9EB] border border-amber-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-display font-bold text-gray-900 uppercase tracking-wide">
                  Próximas Sessões Abertas:
                </h4>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              </div>

              <div className="space-y-3">
                {events.map((evt) => (
                  <div key={evt.date} className="p-3 bg-white/90 rounded-xl border border-amber-200/50 flex items-center justify-between">
                    <div>
                      <strong className="text-xs text-gray-900 block font-semibold">{evt.date}</strong>
                      <span className="text-[11px] text-gray-500 block">{evt.time} · {evt.place}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full shrink-0">
                      {evt.status}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={onOpenWorkshopModal}
                className="w-full py-3 rounded-full text-xs font-display font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Inscrever-se gratuitamente na oficina</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
