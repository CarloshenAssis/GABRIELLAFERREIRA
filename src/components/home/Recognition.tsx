import Container from "@/components/Container";
import { site } from "@/lib/content";

export default function Recognition() {
  return (
    <div className="py-10">
      <Container>
        <p className="text-center text-xs uppercase tracking-[0.16em] text-warm-400">
          {site.recognitions.join("  ·  ")}
        </p>
      </Container>
    </div>
  );
}
