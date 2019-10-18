import { mount } from "@vue/test-utils";
import InputSite from "./InputSite.vue";

jest.mock("../services/url-parser");
import { getSuggestions } from "../services/url-parser";

const createWrapper = data =>
  mount({
    data: () => {
      return {
        site: "",
        passwords: [],
        ...data
      };
    },
    template:
      '<input-site v-model="site" v-bind:passwords="passwords" v-bind:label="\'Site\'"></input-site>',
    components: { "input-site": InputSite }
  });

const optionsFor = wrapper => wrapper.findAll("div.awesomplete li");
const inputField = wrapper => wrapper.find("#siteField");

describe("InputSite", () => {
  beforeEach(() => {
    getSuggestions.mockImplementation(() => []);
  });

  it("fills the input with the value property", () => {
    const wrapper = createWrapper({ site: "lesspass.com" });
    const input = inputField(wrapper);
    expect(input.element.value).toBe("lesspass.com");
  });

  describe("autocomplete", function() {
    describe("search", () => {
      it("filters according to site name", () => {
        const wrapper = createWrapper({
          passwords: [
            { site: "lesspass", login: "xavier" },
            { site: "wrongsite", login: "xavier" }
          ]
        });
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier");
      });
      it(`shows options that are contained in the user's value`, () => {
        const wrapper = createWrapper({
          passwords: [{ site: "lesspass", login: "xavier" }]
        });
        inputField(wrapper).setValue("www.lesspass.com");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier");
      });
      it("filters using suggestion", () => {
        getSuggestions.mockImplementation(() => []);
        const wrapper = createWrapper();
        getSuggestions.mockImplementation(() => ["lesspass"]);
        inputField(wrapper).setValue("lesspass.com");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass");
      });
      it("shows site and login in the list", () => {
        const wrapper = createWrapper({
          passwords: [{ site: "lesspass", login: "xavier" }]
        });
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier");
      });
      it(`doesn't use login`, () => {
        const wrapper = createWrapper({
          passwords: [{ site: "lesspass", login: "xavier" }]
        });
        inputField(wrapper).setValue("xa");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(0);
      });
      it(`prints options sorted by site then login`, () => {
        const wrapper = createWrapper({
          passwords: [
            { site: "lesspass", login: "guillaume" },
            { site: "passless", login: "xavier" },
            { site: "passless", login: "guillaume" },
            { site: "lesspass", login: "xavier" }
          ]
        });
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(4);
        expect(options.at(0).text()).toBe("lesspass guillaume");
        expect(options.at(1).text()).toBe("lesspass xavier");
        expect(options.at(2).text()).toBe("passless guillaume");
        expect(options.at(3).text()).toBe("passless xavier");
      });
    });
    describe("completion", () => {
      describe("when selecting password", () => {
        let wrapper;
        beforeEach(() => {
          wrapper = createWrapper({
            passwords: [{ site: "lesspass", login: "xavier" }]
          });
          inputField(wrapper).setValue("le");
          const options = optionsFor(wrapper);
          options.at(0).trigger("click");
        });
        it("completes field", () => {
          expect(inputField(wrapper).element.value).toBe("lesspass");
        });
        it('emits a "passwordProfileSelected" with the value', () => {
          const emitted = wrapper.find(InputSite).emitted();
          const profileSelected = emitted["passwordProfileSelected"];
          expect(profileSelected.length).toBe(1);
          expect(profileSelected[0]).toEqual([
            { site: "lesspass", login: "xavier" }
          ]);
        });
      });
    });
    describe("when selecting suggestion", () => {
      let wrapper;
      beforeEach(() => {
        getSuggestions.mockImplementation(() => ["lesspass"]);
        wrapper = createWrapper();
        inputField(wrapper).setValue("le");
        const options = optionsFor(wrapper);
        options.at(0).trigger("click");
      });
      it("completes field", () => {
        expect(inputField(wrapper).element.value).toBe("lesspass");
      });
      it('emits a "suggestionSelected" with site value', () => {
        const emitted = wrapper.find(InputSite).emitted();
        const profileSelected = emitted["suggestionSelected"];
        expect(profileSelected.length).toBe(1);
        expect(profileSelected[0]).toEqual(["lesspass"]);
      });
    });
  });
});
