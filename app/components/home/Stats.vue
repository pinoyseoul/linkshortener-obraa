<template>
  <section
    class="
      py-12
      md:py-20
    "
  >
    <div
      class="
        mx-auto max-w-6xl space-y-8 px-6
        md:space-y-12
      "
    >
      <div class="relative z-10 mx-auto max-w-xl space-y-4 text-center">
        <h2
          class="text-3xl font-semibold"
        >
          {{ $t('home.stats.title') }}
        </h2>
        <p class="text-muted-foreground">
          {{ $t('home.stats.subtitle') }}
        </p>
      </div>

      <div
        class="
          grid gap-0 divide-y
          md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0
        "
      >
        <div
          class="
            space-y-4 pb-6 text-center
            md:pb-0
          "
        >
          <div class="text-5xl font-bold tabular-nums">
            100%
          </div>
          <p class="text-muted-foreground">
            Cloudflare Powered
          </p>
        </div>
        <div
          class="
            space-y-4 pt-6 pb-6 text-center
            md:pt-0
          "
        >
          <div class="text-5xl font-bold tabular-nums">
            0ms
          </div>
          <p class="text-muted-foreground">
            Cold Start
          </p>
        </div>
        <div
          class="
            space-y-4 pt-6 text-center
            md:pt-0
          "
        >
          <div class="text-5xl font-bold tabular-nums">
            $0
          </div>
          <p class="text-muted-foreground">
            Running Cost
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
