// Static imports (instead of "/projects/..." strings) let Next.js fingerprint
// each file, serve it with an immutable long-lived cache header, know its
// intrinsic size, and generate a tiny blur placeholder at build time. The
// files stay in /public so any existing direct links keep working.
import elif from "../../../public/projects/elif.png";
import florenciaAlmada from "../../../public/projects/florencia-almada.png";
import alfSolucionesLegales from "../../../public/projects/alf-soluciones-legales.png";
import paseamos from "../../../public/projects/paseamos.png";

export const projectImages = {
  elif,
  florenciaAlmada,
  alfSolucionesLegales,
  paseamos,
  // SVG has no raster blur placeholder, so it stays a plain public path.
  portfolioPlaceholder: "/projects/portfolio-placeholder.svg",
};
