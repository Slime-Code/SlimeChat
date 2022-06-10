<template>
   <q-page class="flex q-pa-md">
    <q-list
    class="full-width"
    separator >
      <q-item 
        v-for="user in users" 
        :key="user.id" 
        to="/chat"
        clickable v-ripple>
      <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
      </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
              <q-badge v-if="user.online" rounded color="green" />
              <q-badge v-else color="red">
                offline
               </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page> 
</template>
<script>
export default {
  data (){
   return{
    users : [ 
      {
        id: 1,
        name: 'Patricio Wilder',
        online: false
      }, 
      {
      id: 2,
      name: 'Josué Rufino',
       online: true
      }, 
      {
      id: 3,
      name: 'Honório Sousa',
       online: true
      }, 
      {
      id: 4,
      name: 'Gibongo',
       online: true
      },
       {
      id: 5,
      name: 'Yuri Rego',
       online: true
      }  
    ]
   }
 }
}
</script>
<style>
</style>
