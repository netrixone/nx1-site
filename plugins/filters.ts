import Vue from 'vue';

Vue.filter('truncate', function (value: string, limit: number): string {
  if (value.length > limit) {
    value = value.substring(0, (limit - 3)) + '...';
  }

  return value
});
