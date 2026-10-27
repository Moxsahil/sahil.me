import React from 'react'
import Experience from './ExperianceComponent'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col py-10 '>
            <Experience
                logo="/logos/canvasflow.svg"
                company="CanvasFlow"
                role="Founder"
                duration="May 2026 - Present"
                points={[
                    "Built CanvasFlow, a real-time collaborative whiteboard: a React canvas editor on a custom canvas engine, a NestJS API gateway and a WebSocket sync server, deployed on Vercel and Fly.io.",
                    "Cut board load time from 7.6 s (peaking at 44 s) to 148 ms by compacting the Yjs update log into a bounded snapshot window, shrinking a board's stored history from 86 rows / 3.85 MB to 3 rows / 27.8 KB.",
                    "Reduced production database latency by moving serverless functions next to the database region (saving ~220 ms per round trip) and sharing one connection pool per process (removing a ~500 ms handshake on each route's first request).",
                    "Load-tested the API gateway with k6 at a p95 latency of 23 ms, serving 2,696 requests/s across 50 concurrent users with 0% failed requests, and built a WebSocket load-test harness with real sync clients that tracks cursor and edit p95 against 80 ms / 100 ms targets.",
                    "Built real-time collaboration over WebSockets (live cursors, presence and edits) with automatic reconnect and exponential backoff, and scaled it across multiple instances with Redis pub/sub so rolling deploys no longer split a live board between users.",
                    "Shipped AI diagram generation with Claude that streams the diagram as it is written, with monthly per-plan quotas enforced in a single atomic statement."
                ]}
                rounded='top'
                skills={["Next.js", "React", "TypeScript", "NestJS", "WebSockets", "Yjs", "PostgreSQL", "Drizzle ORM", "Redis", "Docker", "Fly.io", "k6", "Claude API"]}
            />
            <Experience
                logo="/logos/moxui.svg"
                company="Mox UI"
                role="Founder"
                duration="Sep 2026 - Present"
                points={[
                    "Founded Mox UI, a free, open-source registry of animated React components.",
                    "Every component is a single file users install with the shadcn CLI and own, built with Tailwind CSS and Motion."
                ]}
                rounded='bottom'
                skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "shadcn"]}
            />
        </div>
    )
}

export default ExperienceSection
