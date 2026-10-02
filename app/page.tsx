import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 sm:py-24 flex flex-col items-center justify-center">
        <span className="text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full mb-4">
          Next.js + Tailwind CSS
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl">
          Construye aplicaciones web modernas y veloces
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Estructura optimizada, componentes reutilizables y un diseño limpio listo para escalar tu proyecto.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="#servicios"
            className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium px-6 py-3 rounded-full transition-all shadow"
          >
            Explorar Servicios
          </Link>
          <Link
            href="#contacto"
            className="border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 font-medium px-6 py-3 rounded-full transition-all"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="scroll-mt-24 py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Nuestros Servicios</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Soluciones completas diseñadas para maximizar tus resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Desarrollo Web",
              desc: "Interfaces fluidas y optimizadas con Next.js y React para la mejor experiencia de usuario.",
            },
            {
              title: "Alto Rendimiento",
              desc: "Tiempos de carga ultrarrápidos y buenas prácticas de SEO integradas desde el primer día.",
            },
            {
              title: "Escalabilidad",
              desc: "Arquitectura modular y limpia que facilita agregar nuevas funcionalidades sin fricción.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Acerca de Section */}
      <section id="acerca" className="scroll-mt-24 py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Acerca de Nosotros</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
            Creamos experiencias digitales enfocadas en la eficiencia, usabilidad y rendimiento.
            Utilizamos las herramientas más modernas del ecosistema web para transformar ideas en productos funcionales y atractivos.
          </p>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="scroll-mt-24 py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contacto</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            ¿Tienes alguna consulta o proyecto en mente? Escríbenos y trabajemos juntos.
          </p>
          <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <p className="font-medium text-lg">contacto@ejemplo.com</p>
            <p className="text-sm text-neutral-500 mt-1">Respondemos en menos de 24 horas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}