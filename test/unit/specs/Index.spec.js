import Vue from 'vue'
import Hello from '@/components/Index'

describe('Index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.index h1').textContent).to.equal('Index');
  })
});
