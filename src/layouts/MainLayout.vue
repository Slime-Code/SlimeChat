<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
           <q-btn
            v-if="$route.fullPath.includes('/chat')"
            to="/"
            flat 
            dense 
            icon="arrow_back" />
        <q-toolbar-title class="absolute-center">
          {{title}}
        </q-toolbar-title>
        <q-btn
            to="/auth"
            class="absolute-right q-pr-sm"
            no-caps
            flat 
            dense 
             label="Login"
            icon="account_circle" />
      </q-toolbar>
    </q-header>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import {openURL} from 'quasar'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  export default{
    setup() {
      const $route = useRoute()
      const title = computed(() => {
        if ( $route.fullPath === '/') return "SlimeChat"
        else if($route.fullPath === '/chat') return "Chat"
        else if( $route.fullPath === '/auth') return "Login"
        return ""
      })

      return {
        title
      }
    }
  }
</script>
