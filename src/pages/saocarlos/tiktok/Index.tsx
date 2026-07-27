import { useState } from "react";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Instagram,
  ArrowRight,
} from "lucide-react";
import esportLogo from "@/assets/logo-esport-motor.png";

const WA_MAIN = "551633683060"; // São Carlos (principal)
const WA_RC = "551935229200"; // Rio Claro

const motos = [
  {
    nome: "CG 160 Start",
    cat: "Street",
    img: "/CG_160_Start.webp",
  },
  {
    nome: "Biz 125 ES",
    cat: "Urban",
    img: "/Biz_125_ES.webp",
  },
  {
    nome: "CB 1000R",
    cat: "Naked",
    img: "/CB_1000R.webp",
  },
  {
    nome: "CB 300F Twister",
    cat: "Street",
    img: "/CB_300F_Twister.webp",
  },
  {
    nome: "Hornet 750",
    cat: "Naked",
    img: "/Hornet_750.webp",
  },
  {
    nome: "Honda ADV",
    cat: "Adventure",
    img: "/Honda_ADV.webp",
  },
  {
    nome: "CRF 1100L Africa Twin",
    cat: "Adventure",
    img: "CRF_1100L_Africa_Twin.webp",
  },
  {
    nome: "XRE 190",
    cat: "Trail",
    img: "/XRE_190.webp",
  },
];

const beneficios = [
  {
    n: "01",
    icon: Zap,
    title: "Zero Juros",
    text: "Apenas taxa de administração. Muito mais econômico.",
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Seguro Incluso",
    text: "Planos com Seguro Prestamista incluso.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "Plano Advance",
    text: "Para CB 1000R e CRF 1100L Africa Twin com 70% do valor da moto.",
  },
  {
    n: "04",
    icon: Award,
    title: "Honda",
    text: "Concessionária autorizada com mais de 30 anos rasgando asfalto.",
  },
];

const Logos = () => (
  <div className="flex items-center gap-3">
    <img src={esportLogo} alt="Esport Motor" className="h-10 w-auto" width={120} height={40} />
    <span className="h-8 w-px bg-border" />
  </div>
);

const Index = () => {
  const [form, setForm] = useState({ nome: "", tel: "", email: "", modelo: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Gostaria de simular um consórcio Honda.\nNome: ${form.nome}\nTelefone: ${form.tel}\nE-mail: ${form.email}\nModelo: ${form.modelo}`,
    );
    window.open(`https://api.whatsapp.com/send?phone=${WA_MAIN}&text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top marquee */}
      <div
        className="text-white text-xs font-semibold tracking-widest py-2 text-center uppercase flex items-center justify-center gap-2"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Zap className="w-3.5 h-3.5" /> Consórcio Honda · Sem Juros · Sem Entrada · Simule Agora{" "}
        <Zap className="w-3.5 h-3.5" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a
            href="#"
            aria-label="Ir para o topo da página"
            className="flex items-center gap-3"
          >
            <Logos />

            <span className="text-lg font-semibold text-foreground">
              São Carlos
            </span>
          </a>

    <nav
      aria-label="Navegação"
      className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider"
    >
            <a href="#beneficios" className="hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#motos" className="hover:text-primary transition-colors">
              Motos
            </a>
            <a href="#simular" className="hover:text-primary transition-colors">
              Simular
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <a
            href={`https://api.whatsapp.com/send?phone=${WA_MAIN}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider hover:shadow-[var(--shadow-glow)] transition-all"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div className="absolute top-0 bottom-0 left-0 w-3 diagonal-stripes" aria-hidden />
        <div
          className="absolute top-0 bottom-0 right-0 w-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(var(--brand-blue)) 0 12px, hsl(0 0% 6%) 12px 24px)",
          }}
          aria-hidden
        />

        <div className="container relative grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">
              <span className="w-10 h-px bg-primary" /> Consórcio Honda
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Acelere o <br />
              <span className="text-primary">sonho</span> da <br />
              sua <span className="text-stroke">Honda</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Selecione o modelo, escolha o plano e parcele <strong className="text-primary">SEM JUROS</strong> com a
              Esport Motor — concessionária Honda oficial em São Carlos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#simular"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-sm font-bold uppercase tracking-wider hover:shadow-[var(--shadow-glow)] transition-all"
              >
                <Zap className="w-4 h-4" /> Simular Agora
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${WA_MAIN}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-4 rounded-sm font-bold uppercase tracking-wider hover:shadow-[var(--shadow-blue)] hover:bg-brand-blue-glow transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
              {[
                { v: "+30", l: "Anos no mercado", c: "primary" },
                { v: "100%", l: "Honda", c: "blue" },
                { v: "0%", l: "Juros", c: "primary" },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`border-l-2 pl-4 ${s.c === "blue" ? "border-brand-blue-glow" : "border-primary"}`}
                >
                  <dd className={`font-display text-4xl ${s.c === "blue" ? "text-brand-blue-glow" : "text-primary"}`}>{s.v}</dd>
                  <dt className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-primary/12 blur-3xl rounded-full" aria-hidden />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue-glow/20 blur-3xl rounded-full" aria-hidden />
            <img
              src="https://imagens-prod.microwork.inf.br/modelos/65/versoes/138/versao.png?v=20260429"
              alt="Honda Hornet 750"
              fetchPriority="high"
              className="relative w-full max-w-2xl mx-auto drop-shadow-[0_25px_45px_rgba(193,37,42,0.2)]"
              width={800}
              height={600}
            />
            <div className="absolute bottom-8 left-4 bg-primary/80 text-primary-foreground px-4 py-2 font-display text-sm tracking-widest -rotate-3 shadow-[0_4px_12px_rgba(193,37,42,0.2)]">
              Hornet 750
            </div>
            <div className="absolute top-8 right-4 bg-brand-blue text-white px-4 py-2 font-display text-xs tracking-widest rotate-3 border border-brand-blue-glow">
              Sem Juros
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-background border-y border-border py-5 marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track font-display text-2xl md:text-3xl tracking-wider" aria-hidden={k === 1}>
            {[
              "Sem Juros",
              "Sem Entrada",
              "Honda",
              "+30 Anos",
              "Seguro Incluso",
              "Planos Flexíveis",
              "São Carlos · Honda",
              "Simule pelo WhatsApp",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-12">
                <span className={i % 2 === 0 ? "text-primary" : "text-brand-blue-glow"}>◆</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="container py-24">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Benefícios</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl">
            Por que escolher o <span className="text-primary">Consórcio Honda?</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beneficios.map((b, i) => {
            const isBlue = i % 2 === 1;
            return (
              <article
                key={b.n}
                className={`${isBlue ? "card-hover-blue" : "card-hover"} bg-card border p-6 relative border-border`}
              >
                <div
                  className={`absolute top-4 right-4 font-display text-5xl ${isBlue ? "text-brand-blue-glow/25" : "text-primary/15"}`}
                >
                  {b.n}
                </div>
                <div
                  className={`w-12 h-12 flex items-center justify-center mb-5 border ${
                    isBlue
                      ? "bg-brand-blue/20 text-brand-blue-glow border-brand-blue-glow/40"
                      : "bg-primary/10 text-primary border-primary/30"
                  }`}
                >
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* MOTOS */}
      <section id="motos" className="bg-secondary/40 border-y border-border">
        <div className="container py-24">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Catálogo</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              Selecione sua <span className="text-primary">máquina</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Conheça nossos planos para cada modelo Honda. Da urbana à off-road.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {motos.map((m, i) => {
              const tagColor = i % 3 === 0 ? "primary" : i % 3 === 1 ? "blue" : "white";
              return (
                <article
                  key={m.nome}
                  className={`${
                    tagColor === "primary"
                      ? "card-hover"
                      : tagColor === "blue"
                      ? "card-hover-blue"
                      : "card-hover-white"
                  } bg-card border overflow-hidden group relative border-border`}
                >
                  <span
                    className={`absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${
                      i % 3 === 0
                        ? "bg-primary text-primary-foreground"
                        : i % 3 === 1
                        ? "bg-brand-blue text-white"
                        : "bg-white text-background"
                    }`}
                  >
                    {m.cat}
                  </span>
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-background to-secondary/60 flex items-center justify-center p-4 overflow-hidden relative">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                      style={{
                        background:
                          tagColor === "primary"
                            ? "radial-gradient(circle_at_center,hsl(358 55% 50% / 0.2),transparent 60%)"
                            : tagColor === "blue"
                            ? "radial-gradient(circle_at_center,hsl(222 55% 40% / 0.2),transparent 60%)"
                            : "radial-gradient(circle_at_center,hsl(0 0% 100% / 0.1),transparent 60%)",
                      }}
                    />
                    <img
                      src={m.img}
                      alt={m.nome}
                      loading="lazy"
                      className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-5 border-t border-border flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg leading-tight">{m.nome}</h3>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Consórcio Honda</span>
                    </div>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${WA_MAIN}&text=${encodeURIComponent(
                        `Olá! Quero simular o consórcio da ${m.nome}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Simular ${m.nome}`}
                      className={`w-10 h-10 flex items-center justify-center border border-border text-muted-foreground transition-colors ${
                        tagColor === "primary"
                          ? "group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                          : tagColor === "blue"
                          ? "group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue"
                          : "group-hover:bg-white group-hover:text-background group-hover:border-white"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground/70 mt-10 max-w-4xl leading-relaxed">
            *Os valores aqui divulgados podem ser alterados sem aviso prévio. *Valores com Seguro de Vida Prestamista
            incluso. *A Comercial Esport Motor LTDA. se reserva o direito de possíveis erros de digitação. *O Plano
            Advance para CB 1000R e CRF 1100L África Twin correspondem a 70% do valor da motocicleta.
          </p>
        </div>
      </section>

      {/* SIMULAR */}
      <section id="simular" className="container py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Simulação</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
              Faça sua <span className="text-primary">simulação agora</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Preencha os dados e nosso time entra em contato com a melhor proposta para acelerar seu sonho.
            </p>
            <ul className="space-y-4">
              {["Atendimento Honda especializado", "Planos para todos os modelos", "Resposta em até 1 dia útil"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <span className="w-8 h-8 bg-primary/10 text-primary border border-primary/30 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border p-8 space-y-5"
            aria-label="Formulário de simulação"
          >
            <h3 className="font-display text-2xl mb-2">Preencha e simule</h3>
            <div>
              <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider mb-2">
                Nome completo
              </label>
              <input
                id="nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full bg-input border border-border px-4 py-3 focus:border-primary outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tel" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Telefone
                </label>
                <input
                  id="tel"
                  required
                  type="tel"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="w-full bg-input border border-border px-4 py-3 focus:border-primary outline-none"
                  placeholder="(19) 90000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-input border border-border px-4 py-3 focus:border-primary outline-none"
                  placeholder="voce@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="modelo" className="block text-xs font-bold uppercase tracking-wider mb-2">
                Modelo de interesse
              </label>
              <select
                id="modelo"
                required
                value={form.modelo}
                onChange={(e) => setForm({ ...form, modelo: e.target.value })}
                className="w-full bg-input border border-border px-4 py-3 focus:border-primary outline-none"
              >
                <option value="">Selecione um modelo</option>
                {motos.map((m) => (
                  <option key={m.nome} value={m.nome}>
                    {m.nome}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-bold uppercase tracking-wider hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Simular pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-secondary/40 border-y border-border">
        <div className="container py-24">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">// Lojas</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              Visite nossas <span className="text-primary">unidades</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { cidade: "São Carlos / SP", end: "Av. São Carlos, 736 - Vila Lutfalla", tel: "(16) 3368-3060", wa: WA_MAIN, accent: "blue" },
              {
                cidade: "Rio Claro / SP",
                end: "Rua 14, 289 - Consolação",
                tel: "(19) 3522-9200",
                wa: WA_RC,
                accent: "primary",
              },
            ].map((l) => {
              const isBlue = l.accent === "blue";
              const accentText = isBlue ? "text-brand-blue-glow" : "text-primary";
              const accentBg = isBlue ? "bg-brand-blue" : "bg-primary";
              const accentShadow = isBlue ? "hover:shadow-[var(--shadow-blue)]" : "hover:shadow-[var(--shadow-glow)]";
              return (
                <article
                  key={l.cidade}
                  className={`${isBlue ? "card-hover-blue border-brand-blue-glow/60" : "card-hover border-border"} bg-card border p-8 relative overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${accentBg}`} />
                  <div
                    className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 ${accentBg}`}
                    aria-hidden
                  />
                  <span className={`text-xs font-bold uppercase tracking-widest ${accentText} relative`}>
                    Esport Motor
                  </span>
                  <h3 className="font-display text-3xl mt-2 mb-5 relative">{l.cidade}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground relative">
                    <li className="flex items-start gap-3">
                      <MapPin className={`w-4 h-4 ${accentText} mt-0.5 shrink-0`} /> {l.end}
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className={`w-4 h-4 ${accentText} mt-0.5 shrink-0`} /> {l.tel}
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className={`w-4 h-4 ${accentText} mt-0.5 shrink-0`} /> Seg à Sex: 08h às 18h · Sábado: 08h às 12h
                    </li>
                  </ul>
                  <a
                    href={
                      l.cidade.includes("Rio Claro")
                        ? "https://api.whatsapp.com/send?phone=551935229200&text=Ol%C3%A1,%20pode%20me%20ajudar?"
                        : `https://api.whatsapp.com/send?phone=${WA_MAIN}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-2 ${accentBg} text-white px-5 py-3 font-bold uppercase tracking-wider text-sm ${accentShadow} transition-all relative`}
                  >
                    <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logos />
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Consórcio Honda · São Carlos
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/esportmotor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${WA_MAIN}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-5 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Comercial Esport Motor LTDA. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?phone=${WA_MAIN}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[var(--shadow-glow)] hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
