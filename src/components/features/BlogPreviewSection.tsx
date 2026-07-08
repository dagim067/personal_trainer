"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useVideos } from "@/lib/supabase/hooks";
import type { Video } from "@/lib/supabase/queries";

export function BlogPreviewSection() {
  const { data: videos = [], isLoading, error } = useVideos();

  return (
    <section
      id="journal"
      className="py-24 md:py-32 bg-background relative border-t border-border/10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-primary/80" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Journal
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Video Journal
            </h2>
            <p className="mt-4 max-w-xl text-foreground/70 text-sm md:text-base leading-7">
              Explore short, actionable coaching videos on our YouTube channel.
              Each story is a quick lesson in movement, nutrition, or mindset.
            </p>
          </div>
          <Link
            href="https://www.youtube.com/channel/UC-your-channel-id"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            Visit YouTube Channel
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border/20 bg-card p-6 shadow-sm shadow-black/5 h-96 animate-pulse"
              />
            ))
          ) : error ? (
            <div className="col-span-3 rounded-2xl border border-border/20 bg-card p-8 text-center text-destructive">
              Unable to load videos.
            </div>
          ) : videos.length === 0 ? (
            <div className="col-span-3 rounded-[2rem] border border-border/20 bg-card p-12 text-center shadow-xl shadow-black/5">
              <p className="text-sm uppercase tracking-[0.24em] text-primary mb-4">
                No Journal Content Yet
              </p>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                We’re still building the journal.
              </h3>
              <p className="mx-auto max-w-xl text-foreground/70 leading-relaxed">
                Our transformation stories are live, but the journal section is
                still being updated. Check back soon for new coaching videos, or
                contact us to get exclusive early access and personalized tips.
              </p>
            </div>
          ) : (
            videos
              .filter(
                (
                  video,
                ): video is Video & {
                  video_url: string;
                  cover_image: string;
                } => Boolean(video.video_url && video.cover_image),
              )
              .map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group block cursor-pointer"
                >
                  <Link
                    href={video.video_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <div className="aspect-16/10 rounded-2xl overflow-hidden mb-6 relative border border-border/20 bg-card shadow-sm shadow-black/5">
                      <Image
                        src={video.cover_image}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-x-0 bottom-4 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-lg shadow-black/10">
                          Watch on YouTube
                        </span>
                      </div>
                      <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary uppercase tracking-wider">
                        {video.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-foreground/60 text-xs mb-3 font-medium uppercase tracking-wider">
                      <span>{video.read_time ?? "Video"}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                      {video.title}
                    </h3>

                    <p className="text-foreground/70 text-sm line-clamp-3 leading-relaxed">
                      Watch this quick coaching video for actionable tips.
                    </p>
                  </Link>
                </motion.div>
              ))
          )}
        </div>
      </div>
    </section>
  );
}
