"use client";

import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

type Faq = { q: string; a: string };

type Tratamento = {
  id: string;
  icon: string;
  titulo: string;
  chamada: string;
  tag: string;
  faqs: Faq[];
};

const TRATAMENTOS: Tratamento[] = [
  {
    id: "implante",
    icon: "🔩",
    titulo: "Implantes Dentários",
    chamada: "Sem dores, renove seu sorriso e viva de frente para os seus maiores sonhos",
    tag: "Implantodontia",
    faqs: [
      {
        q: "O que é o implante dentário?",
        a: "É um pino de titânio que substitui a raiz do dente perdido, servindo de base para uma coroa (dente) com aparência e função idêntica ao natural. Fixo, confortável e duradouro.",
      },
      {
        q: "Quais problemas a falta de dente pode causar?",
        a: "A ausência dentária compromete a mastigação, desgasta os dentes vizinhos, altera a fala e, com o tempo, provoca perda óssea que muda o formato do rosto.",
      },
      {
        q: "O implante pode resolver o meu problema?",
        a: "Sim! Na OdontoNeo Infinity realizamos o planejamento completo com imagem 3D para indicar o implante ideal para o seu caso, devolvendo função, estética e confiança.",
      },
    ],
  },
  {
    id: "protocolo",
    icon: "😁",
    titulo: "Prótese Protocolo (Dentes Fixos)",
    chamada: "Substitua a dentadura por uma prótese fixa e recupere sua qualidade de vida",
    tag: "Reabilitação Oral",
    faqs: [
      {
        q: "O que é a prótese protocolo?",
        a: "É uma prótese total fixa, apoiada sobre implantes, que substitui todos os dentes de uma arcada. Oferece estabilidade, estética e função próximas aos dentes naturais.",
      },
      {
        q: "Quais problemas a dentadura convencional pode causar?",
        a: "Dentaduras se movem durante a fala e mastigação, ferem a gengiva, reduzem a força mastigatória e não estimulam o osso, causando perda óssea progressiva.",
      },
      {
        q: "A prótese protocolo pode resolver o meu problema?",
        a: "Sim! Utilizamos tecnologia de ponta para confeccionar próteses protocolo com ajuste preciso, conforto e alta durabilidade. Você volta a sorrir, falar e mastigar com segurança.",
      },
    ],
  },
  {
    id: "protese",
    icon: "🦷",
    titulo: "Próteses Dentárias",
    chamada: "Um sorriso muda tudo: recupere sua confiança com a prótese certa para você",
    tag: "Reabilitação",
    faqs: [
      {
        q: "O que são as próteses dentárias?",
        a: "São dispositivos fixos ou removíveis que substituem dentes perdidos, restaurando estética e função mastigatória. Podem ser parciais ou totais.",
      },
      {
        q: "Quando a prótese é indicada?",
        a: "Quando o implante não é a melhor opção no momento — por condição óssea, saúde sistêmica ou preferência do paciente — a prótese é uma solução eficiente e confortável.",
      },
      {
        q: "Como a prótese pode melhorar minha vida?",
        a: "Além de restabelecer a mastigação e a fala, a prótese bem adaptada devolve autoestima e qualidade de vida. Fazemos o ajuste minucioso para seu máximo conforto.",
      },
    ],
  },
  {
    id: "canal",
    icon: "💉",
    titulo: "Tratamento de Canal (Endodontia)",
    chamada: "Elimine a dor e salve o seu dente com segurança e precisão",
    tag: "Endodontia",
    faqs: [
      {
        q: "O que é o tratamento de canal?",
        a: "É um procedimento que remove a polpa infectada do interior do dente, limpa os canais radiculares e os sela para eliminar a infecção e preservar o dente.",
      },
      {
        q: "Quando o canal é necessário?",
        a: "Dor intensa, sensibilidade prolongada ao calor ou frio, inchaço na gengiva ou escurecimento do dente são sinais de que o tratamento de canal pode ser necessário.",
      },
      {
        q: "O canal dói? Como é o procedimento?",
        a: "Com anestesia adequada, o procedimento é indolor. Nosso objetivo é eliminar a dor, salvar o dente natural e evitar extrações desnecessárias.",
      },
    ],
  },
  {
    id: "gengiva",
    icon: "🌿",
    titulo: "Tratamento de Gengiva (Periodontia)",
    chamada: "Cuide das raízes do seu sorriso: gengiva saudável é o alicerce de tudo",
    tag: "Periodontia",
    faqs: [
      {
        q: "O que é a doença periodontal?",
        a: "É uma infecção bacteriana que afeta a gengiva e o osso que sustentam os dentes. Pode evoluir silenciosamente e levar à perda dentária se não tratada.",
      },
      {
        q: "Quais são os sinais de alerta?",
        a: "Sangramento ao escovar, gengiva vermelha ou inchada, mau hálito persistente e dentes sensíveis são os principais sinais de problema gengival.",
      },
      {
        q: "Como é o tratamento periodontal?",
        a: "Iniciamos com limpeza profunda (raspagem) e orientações de higiene. Casos mais avançados podem exigir procedimento cirúrgico. O diagnóstico precoce garante resultados melhores.",
      },
    ],
  },
  {
    id: "clareamento",
    icon: "✨",
    titulo: "Clareamento Dental",
    chamada: "Do branco natural ao extra brilho: revele um sorriso radiante",
    tag: "Estética",
    faqs: [
      {
        q: "O que é o clareamento dental?",
        a: "É um procedimento estético que utiliza géis clareadores para remover manchas e clarear a cor dos dentes, de forma segura e supervisionada pelo dentista.",
      },
      {
        q: "Clareamento dental faz mal aos dentes?",
        a: "Quando realizado por profissional habilitado e com produtos certificados, o clareamento é seguro. Pode haver leve sensibilidade temporária, que desaparece em poucos dias.",
      },
      {
        q: "Qual o resultado esperado?",
        a: "Os resultados variam conforme a coloração original dos dentes, mas em geral obtemos de 4 a 8 tons de clareamento. O resultado é imediato e dura vários meses.",
      },
    ],
  },
  {
    id: "lentes",
    icon: "💎",
    titulo: "Lentes de Contato Dental",
    chamada: "Tão belas quanto resistentes: as lentes farão seu sorriso brilhar",
    tag: "Estética",
    faqs: [
      {
        q: "O que são as lentes de contato dental?",
        a: "São finas capas de porcelana que cobrem a face dos dentes, corrigindo forma, cor e tamanho. O resultado é um sorriso harmonioso, natural e extremamente resistente.",
      },
      {
        q: "Para quem as lentes são indicadas?",
        a: "Para quem deseja corrigir dentes manchados, quebrados, espaçados ou com formato irregular, buscando uma transformação estética completa e duradoura.",
      },
      {
        q: "Como é o processo de colocação?",
        a: "O processo envolve avaliação, moldagem digital, aprovação do design do sorriso e cimentação das lentes. Desgaste mínimo do dente e resultado imediato.",
      },
    ],
  },
];

function FaqItem({ faq, isOpen, onClick }: { faq: Faq; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className="overflow-hidden rounded-xl border transition-all duration-200"
      style={{
        borderColor: isOpen ? "#1F3A5F" : "#E8EEF5",
        background: isOpen ? "#F7FAFD" : "#FFFFFF",
      }}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <span className="text-sm font-semibold text-[#0E0E0E]">{faq.q}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-transform duration-200"
          style={{
            background: isOpen ? "#1F3A5F" : "#EAF0F6",
            color: isOpen ? "#FFFFFF" : "#1F3A5F",
            transform: isOpen ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-sm leading-relaxed text-[#4A4A4A]">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function TratamentosSection() {
  const [activeTab, setActiveTab] = useState(TRATAMENTOS[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const current = TRATAMENTOS.find((t) => t.id === activeTab)!;

  function toggleFaq(i: number) {
    setOpenFaq(openFaq === i ? null : i);
  }

  function handleTab(id: string) {
    setActiveTab(id);
    setOpenFaq(0);
  }

  return (
    <section id="tratamentos" className="bg-white">
      <div className="section">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3 block">Nossos Tratamentos</span>
          <h2 className="title-section mb-3">
            Descubra o que podemos fazer pelo seu sorriso
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#4A4A4A]">
            Da substituição de um único dente à reabilitação oral completa, temos o tratamento
            indicado para você — com explicação clara e sem pressão.
          </p>
        </div>

        {/* Tabs de navegação */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TRATAMENTOS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => handleTab(t.id)}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200"
              style={
                activeTab === t.id
                  ? { background: "#1F3A5F", color: "#FFFFFF", boxShadow: "0 4px 12px rgba(31,58,95,0.2)" }
                  : { background: "#EAF0F6", color: "#1F3A5F" }
              }
            >
              <span>{t.icon}</span>
              <span className="hidden sm:inline">{t.titulo}</span>
            </button>
          ))}
        </div>

        {/* Painel do tratamento selecionado */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl" style={{ border: "1px solid #E8EEF5", boxShadow: "0 4px 24px rgba(31,58,95,0.08)" }}>
          <div className="grid lg:grid-cols-2">

            {/* Esquerda — Foto + chamada */}
            <div
              className="flex flex-col justify-between p-8"
              style={{ background: "linear-gradient(135deg, #1F3A5F 0%, #162D4A 100%)" }}
            >
              {/* Tag */}
              <span
                className="mb-6 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "rgba(212,161,30,0.2)", color: "#D4A11E", border: "1px solid rgba(212,161,30,0.35)" }}
              >
                {current.tag}
              </span>

              {/* Ícone grande */}
              <div
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl text-4xl"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {current.icon}
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                  {current.titulo}
                </h3>
                <p className="mb-8 text-base leading-relaxed text-white/65">
                  {current.chamada}
                </p>

                {/* Foto placeholder dentro do card */}
                <div
                  className="flex aspect-[16/9] w-full items-center justify-center rounded-2xl text-center text-sm"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px dashed rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.3)" }}
                >
                  📷 Foto do tratamento
                </div>
              </div>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa mt-7 w-full"
              >
                Agendar Avaliação Gratuita
              </a>
            </div>

            {/* Direita — FAQ */}
            <div className="flex flex-col justify-center p-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#D4A11E]">
                Perguntas frequentes
              </p>
              <div className="space-y-3">
                {current.faqs.map((faq, i) => (
                  <FaqItem
                    key={faq.q}
                    faq={faq}
                    isOpen={openFaq === i}
                    onClick={() => toggleFaq(i)}
                  />
                ))}
              </div>

              {/* Mini CTA */}
              <div
                className="mt-6 rounded-2xl p-4"
                style={{ background: "#F7FAFD", border: "1px solid #E8EEF5" }}
              >
                <p className="mb-1 text-sm font-bold text-[#0E0E0E]">
                  Quer saber se esse tratamento é ideal para você?
                </p>
                <p className="mb-3 text-xs text-[#4A4A4A]">
                  Agende uma avaliação gratuita e descubra a solução definitiva para o seu caso.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: "#1F3A5F" }}
                >
                  Agendar agora →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            Agende sua consulta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
