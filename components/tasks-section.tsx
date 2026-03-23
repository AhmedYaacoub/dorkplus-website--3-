import { Button } from "@/components/ui/button"

export function TasksSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <Button variant="outline" className="mb-4 bg-transparent">
          Modules
        </Button>

        <h2 className="text-4xl lg:text-5xl font-bold text-balance">Your tasks, minus the hassle</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Run multiple tasks at once, save time and be more efficient. You don't need to focus on 5 different tools no
          more, just keep one that does all the job.
        </p>
      </div>
    </section>
  )
}
