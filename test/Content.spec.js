import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallow, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '../src/routes'
import Content from '../src/components/Content.vue'
import MapPage from '../src/components/booking/map/page.vue'

const localVue = createLocalVue();
localVue.use(VueRouter)
localVue.use(Vuetify);
const router = new VueRouter({ routes })

describe('page.vue', () => {
    var wrapper;

    beforeEach(() => {
        wrapper = shallow(Content, {
            localVue,
            router
        })
    });

    it('$route should be found in root', () => {
        expect(wrapper.vm.$route.path).toBe('/');
    })

    it('In root should be visible MapPageComponent', () => {
        const MapPageArray = wrapper.findAll(MapPage)
        MapPageArray.setData({ pageTitle: 'Some text' })
        expect(wrapper.find('.maplayoutTitle').html()).toContain('Some text');
    })
})