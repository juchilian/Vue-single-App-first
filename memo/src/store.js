const state = {
  activeList: [],
  tagList: [
    { id: 0, name: "cheep", isActive: false },
    { id: 1, name: "popular", isActive: false },
    { id: 2, name: "active", isActive: false },
    { id: 3, name: "Near Station", isActive: false }
  ],
  tripList: [
    {
      id: 1,
      title: "朗らか旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [0, 1],
      cost: 1920000
    },
    {
      id: 2,
      title: "愉快な旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [2, 3],
      cost: 150000
    },
    {
      id: 3,
      title: "ぼんやり旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [0],
      cost: 170000
    },
    {
      id: 4,
      title: "超アクティビティ！旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [],
      cost: 600000
    },
    {
      id: 5,
      title: "100%幸せになれる旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [3, 4],
      cost: 90000
    },
    {
      id: 6,
      title: "海巡り旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [2],
      cost: 4500
    },
    {
      id: 7,
      title: "食べ歩き旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [1, 2, 3, 4],
      cost: 198000
    },
    {
      id: 8,
      title: "ぶらり旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [2, 4],
      cost: 100000000
    },
    {
      id: 9,
      title: "星をみる旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [],
      cost: 70000
    },
    {
      id: 10,
      title: "よき旅",
      content: "とても楽しい雰囲気でお勧めです",
      tags: [1, 3],
      cost: 20000
    }
  ],
  formState: {
    searchType: false,
    sort: "cost-low"
  }
}

const debug = process.env.NODE_ENV !== 'production'
const actions = {
  toggle(id) {
    debug && console.log(`toggle triggered with`, id)
    state.tagList[id].isActive = !state.tagList[id].isActive;
    state.activeList = [];
    state.tagList.filter(tag => {
      if (tag.isActive === true) {
        state.activeList.push(tag);
      }
    });
  }
}

export default {
  state,
  actions
}