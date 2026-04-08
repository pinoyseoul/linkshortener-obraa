<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import heroUrl from '@/assets/images/hero.svg?url'

const { title, description, twitter, facebook } = useAppConfig()
</script>

<template>
  <section>
    <div
      class="
        py-16
        md:py-24
      "
    >
      <div
        class="
          mx-auto flex max-w-6xl flex-col items-center gap-12 px-6
          lg:flex-row lg:justify-between
        "
      >
        <div
          class="
            max-w-lg text-center
            lg:text-left
          "
        >
          <div
            class="
              mx-auto mb-8 flex flex-wrap items-center justify-center gap-3
              lg:mx-0
            "
          >
            <a
              :href="twitter"
              target="_blank"
              rel="noopener"
              class="
                rounded-full border px-3 py-1 text-sm
                hover:bg-muted
              "
            >
              Follow on X
            </a>
            <a
              :href="facebook"
              target="_blank"
              rel="noopener"
              class="
                rounded-full border px-3 py-1 text-sm
                hover:bg-muted
              "
            >
              Follow on Facebook
            </a>
          </div>

          <h1
            class="
              text-4xl font-medium text-balance
              md:text-5xl
              xl:text-6xl
            "
          >
            {{ title }}
          </h1>
          <p class="mt-6 text-lg text-pretty text-muted-foreground">
            {{ description }}
          </p>

          <div
            class="
              mt-10 flex flex-col items-center justify-center gap-2
              sm:flex-row
              lg:justify-start
            "
          >
            <Button
              as-child
              size="lg"
              class="px-5 text-base"
            >
              <NuxtLink to="/dashboard">
                <span class="text-nowrap">{{ $t('dashboard.title') }}</span>
                <ArrowRight class="ml-2 h-4 w-4" />
              </NuxtLink>
            </Button>
          </div>
        </div>

        <object
          type="image/svg+xml"
          :data="heroUrl"
          class="
            hidden aspect-square w-96 shrink-0
            md:block
            lg:w-[420px]
          "
          aria-label="Link sharing illustration"
          suppressHydrationWarning
        />
      </div>
    </div>
  </section>
</template>
