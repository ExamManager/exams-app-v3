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
                "relative overflow-hidden rounded-xl border border-border/90 bg-zinc-950 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.45)] dark:border-white/10 dark:shadow-[0_28px_90px_-20px_rgba(0,0,0,0.75)]",
                className,
            )}
        >
            <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-zinc-900 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
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
