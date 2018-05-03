import { mount, createLocalVue } from '@vue/test-utils'
import NavBar from '../../src/components/layouts/NavBar.vue'
import Vuetify from 'vuetify';
import Vue from 'vue';
import sinon from 'sinon';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('NavBar.vue', () => {
    var wrapper;

    beforeEach(() => {
        wrapper = mount(NavBar, {
                localVue: localVue,
                propsData: {
                    profile: {
                        name: 'Test name',
                        photo: 'Test photo'
                    },
                    menu: [
                        { title: "Test1", icon: "dashboard" },
                        { title: "Test2", icon: "question_answer" }
                    ]
                }
            })
            // spy = sinon.spy(wrapper.vm.$eventHub, '$emit');
    });

    it('should be open nav menu', () => {
        wrapper.find({ ref: 'toolbarmenu' }).trigger('click');
        expect(wrapper.vm.drawer).toBe(true);
    })

    it('should be set props', () => {
        expect(wrapper.vm.profile.name).toBe('Test name');
        expect(wrapper.vm.profile.photo).toBe('Test photo');
        expect(wrapper.vm.menu[0].title).toBe('Test1');
        expect(wrapper.vm.menu[0].icon).toBe('dashboard');
        expect(wrapper.vm.menu[1].title).toBe('Test2');
        expect(wrapper.vm.menu[1].icon).toBe('question_answer');
    })

    it('should be visible props on the page', () => {
        expect(wrapper.html()).toContain('Test name');
        expect(wrapper.html()).toContain('Test photo');
        expect(wrapper.html()).toContain('dashboard');
        expect(wrapper.html()).toContain('Test2');
        expect(wrapper.html()).toContain('question_answer');
    })
})