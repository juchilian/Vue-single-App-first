const state = {
  trips =[]
}

const debug = process.env.NODE_ENV !== 'production'
const actions = {
  toggle(id) {
    debug && console.log(`toggle triggered with`, id)
    this.tagList[id].isActive = !this.tagList[id].isActive;
    this.activeList = [];
    this.tagList.filter(tag => {
      if (tag.isActive === true) {
        this.activeList.push(tag);
      }
    });
  }
}

export default {
  state,
  actions
}