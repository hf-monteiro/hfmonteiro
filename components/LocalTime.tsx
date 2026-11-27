"use client";

import { useEffect, useState } from "react";

// Live clock for a fixed timezone. Renders a placeholder on the server and
// fills in after mount, so the static HTML never disagrees with the client.
export default function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" }).format(new Date());
    setNow(format());
    const id = setInterval(() => setNow(format()), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <span suppressHydrationWarning>{now ?? "--:--"}</span>;
}
