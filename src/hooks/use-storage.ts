import { onMounted, Ref, ref, watch } from 'vue'

const useStorage = (key: string, initValue: any = ''): Ref<any> => {
  const storageValue = ref<any>(initValue)

  onMounted(() => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(initValue))
    } else {
      storageValue.value = localStorage.getItem(key)
    }
  })

  watch([storageValue], (value) => {
    localStorage.setItem(key, JSON.stringify(value))
  })

  return storageValue
}

export default useStorage
