<template>
  <div class="container mx-auto px-4">
    <article>
      <app-search-input />
      <div class="text-3xl font-semibold">{{ article.title }}</div>
      <div class="nav">
        <nav>
          <ul class="list-disc list-outside md:list-inside">
            <li
              v-for="link of article.toc"
              :key="link.id"
              class="list-outside bg-rose-200"
            >
              <NuxtLink
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3,
                }"
                :to="`#${link.id}`"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
      <p>{{ article.description }}</p>
      <img
        :src="require(`~/assets/images/${article.img}`)"
        :alt="article.alt"
      />
      <div class="">
        <NuxtContent
          class="px-4 border-0 border-opacity-0 shadow-2xl rounded bg-gray-900 text-gray-500 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
          :document="article"
        />
      </div>
      <div>
        <author :author="article.author" />
      </div>
      <div>
        <prev-next :prev="prev" :next="next" />
      </div>
    </article>
  </div>
</template>

<script>
import Prism from 'prismjs'
import AppSearchInput from '~/components/AppSearchInput.vue'
export default {
  components: { AppSearchInput },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en', options)
    },
  },
}
</script>

<style>
/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 4em;
  color: #35495e;
  letter-spacing: 1px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
} */
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
