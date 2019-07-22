import { mount } from "@vue/test-utils";
import InputSite from "./InputSite.vue";

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
            { id: "p1", site: "lesspass", login: "xavier" },
            { id: "p2", site: "wrongsite", login: "xavier" }
          ]
        });
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier");
      });
      it(`shows options that are contained in the user's value`, () => {
        const wrapper = createWrapper({
          passwords: [{ id: "p3", site: "lesspass", login: "xavier" }]
        });
        inputField(wrapper).setValue("www.lesspass.com");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier");
      });
      it("shows site and login in the list", () => {
        const wrapper = createWrapper({
          passwords: [{ id: "p4", site: "lesspass", login: "xavier" }]
        });
        inputField(wrapper).setValue("le");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(1);
        expect(options.at(0).text()).toBe("lesspass xavier");
      });
      it(`doesn't use login`, () => {
        const wrapper = createWrapper({
          passwords: [{ id: "p5", site: "lesspass", login: "xavier" }]
        });
        inputField(wrapper).setValue("xa");
        let options = optionsFor(wrapper);
        expect(options.length).toBe(0);
      });
      it(`prints options sorted by site then login`, () => {
        const wrapper = createWrapper({
          passwords: [
            { id: "p6", site: "lesspass", login: "guillaume" },
            { id: "p7", site: "passless", login: "xavier" },
            { id: "p8", site: "passless", login: "guillaume" },
            { id: "p9", site: "lesspass", login: "xavier" }
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
            passwords: [{ id: "p10", site: "lesspass", login: "xavier" }]
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
          const events = emitted["passwordProfileSelected"];
          expect(events.length).toBe(1);
          expect(events[0]).toEqual([
            { id: "p10", site: "lesspass", login: "xavier" }
          ]);
        });
      });
    });
  });
});
