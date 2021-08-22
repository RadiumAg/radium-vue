<!-- <template>
  <div class="ra-slider__mask"></div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from 'vue';
import { SLIDER_PROVIDE_TOKEN, TDirection, TSliderProvide } from './slider';

export default defineComponent({
  name: 'Mask',
  props: {
    direction: {
      type: String as PropType<TDirection>,
      default: 'x',
    },
  },
  setup() {
    const sliderToken = inject<TSliderProvide>(SLIDER_PROVIDE_TOKEN);
    const maskAvg = computed(() => {
      return (
        Number.parseFloat(
          (sliderToken.step.value / sliderToken.maxValue.value).toFixed(2),
        ) * 100
      );
    });

    const
  },
});
</script> -->
