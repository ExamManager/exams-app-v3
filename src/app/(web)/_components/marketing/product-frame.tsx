import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductFrameProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
    sizes?: string;
};

export function ProductFrame({
    src,
    alt,
    width,
    height,
    priority,
    className,
    sizes = "(max-width: 1024px) 100vw, 58vw",
}: ProductFrameProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-border/90 bg-zinc-950 shadow-[0_32px_90px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/5 dark:border-white/10 dark:shadow-[0_36px_100px_-24px_rgba(0,0,0,0.85)] dark:ring-white/5",
                className,
            )}
        >
            <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-zinc-900/95 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate text-[11px] text-zinc-400">
                    exammanager.dev
                </span>
            </div>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className="h-auto w-full bg-white object-cover object-left-top"
                sizes={sizes}
            />
        </div>
    );
}
