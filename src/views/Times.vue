<template>
  <div>
    <v-sheet height="800">
      <v-calendar
        color="primary"
        type="month"
        locale="de"
        :interval-format="interval => interval.time"
        :weekdays="[1, 2, 3, 4, 5]"
      >
        <template v-slot:day="day">
          <v-container fluid grid-list-md pa-2>
            <v-layout wrap>
              <v-flex xs6>
                <v-card outlined style="padding:0px">
                  <v-card-text>
                    <v-text-field type="time"></v-text-field>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card outlined style="padding:0px">
                  <v-card-text>
                    <v-text-field type="time"></v-text-field>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    vacation: [
      // {
      //   name: "Vacation",
      //   start: "2019-07-24",
      //   end: "2019-07-25",
      //   color: "blue"
      // }
    ]
  }),
  methods: {}
};
</script>
