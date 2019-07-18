import {mount} from '@vue/test-utils'
import InputSite from './InputSite.vue'

const createParent = data => mount({
  data: () => {
    return {
      site: "",
      passwords: [],
      ...data
    }
  },
  template: '<input-site v-model="site" v-bind:passwords="passwords" v-bind:label="\'Site\'"></input-site>',
  components: {'input-site': InputSite}
});

const optionsFor = wrapper => wrapper.findAll("div.awesomplete li");

describe('InputSite', () => {
  it('fills the input with the value property', () => {
    const parent = createParent({site: 'lesspass.com'});
    const input = parent.find('#siteField');
    expect(input.element.value).toBe("lesspass.com")
  });

  describe('autocomplete', function () {
    it('search according to site name', () => {
      const wrapper = createParent({passwords: [{site: "lesspass", login: "xavier"}]});
      wrapper.find('#siteField').setValue("le");
      let options = optionsFor(wrapper);
      expect(options.length).toBe(1);
      expect(options.at(0).text()).toContain("lesspass")
    });
    it(`doesn't use login`, () => {
      const wrapper = createParent({passwords: [{site: "lesspass", login: "xavier"}]});
      wrapper.find('#siteField').setValue("xa");
      let options = optionsFor(wrapper);
      expect(options.length).toBe(0);
    });
    it(`prints all options`, () => {
      const wrapper = createParent({
        passwords: [
          {site: "lesspass", login: "xavier"},
          {site: "lesspass", login: "guillaume"}]
      });
      wrapper.find('#siteField').setValue("le");
      let options = optionsFor(wrapper);
      expect(options.length).toBe(2);
      expect(options.at(0).text()).toContain("lesspass");
      expect(options.at(1).text()).toContain("lesspass");
    });
  });

});
