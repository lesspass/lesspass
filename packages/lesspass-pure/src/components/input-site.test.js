import {mount} from '@vue/test-utils'
import InputSite from './InputSite.vue'
jest.mock('../services/url-parser');
import { getSuggestions } from '../services/url-parser';


const createWrapper = data => mount({
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
const inputField = wrapper => wrapper.find('#siteField');

describe('InputSite', () => {
  beforeEach(() => {
    getSuggestions.mockImplementation(() => []);
  });
  it('fills the input with the value property', () => {
    const wrapper = createWrapper({site: 'lesspass.com'});
    const input = inputField(wrapper);
    expect(input.element.value).toBe("lesspass.com")
  });

  describe('autocomplete', function () {
    describe('search', () => {
      it('filters according to site name', () => {
        const wrapper = createWrapper({passwords: [{site: "lesspass", login: "xavier"}]});
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toContain("lesspass")
      });
      it('filters using suggestion', () => {
        getSuggestions.mockImplementation(() => ["lesspass"]);
        const wrapper = createWrapper();
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toContain("lesspass")
      });
      it('shows site and login in the list', () => {
        const wrapper = createWrapper({passwords: [{site: "lesspass", login: "xavier"}]});
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier")
      });
      it(`doesn't use login`, () => {
        const wrapper = createWrapper({passwords: [{site: "lesspass", login: "xavier"}]});
        inputField(wrapper).setValue("xa");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(0);
      });
      it(`prints all options`, () => {
        const wrapper = createWrapper({
          passwords: [
            {site: "lesspass", login: "xavier"},
            {site: "lesspass", login: "guillaume"}]
        });
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(2);
        expect(options.at(0).text()).toContain("lesspass");
        expect(options.at(1).text()).toContain("lesspass");
      });
    });
    describe('completion', () => {

      let wrapper;
      beforeEach(() => {
        wrapper = createWrapper({passwords: [{site: "lesspass", login: "xavier"}]});
        inputField(wrapper).setValue("le");
        const options = optionsFor(wrapper);
        options.at(0).trigger('click');
      });
      it('completes field when selected', () => {
        expect(inputField(wrapper).element.value).toBe("lesspass");
      });
      it('emits a "passwordProfileSelected" with the value when saved password is selected', () => {
        const emitted = wrapper.find(InputSite).emitted();
        const profileSelected = emitted['passwordProfileSelected'];
        expect(profileSelected.length).toBe(1);
        expect(profileSelected[0]).toEqual([{site: "lesspass", login: "xavier"}]);
      });
    });
  });

});
