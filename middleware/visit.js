import Queries from '~/utils/Queries'


export default function({ store, route, redirect, document }) {

  if (process.client) {

    const queries = new Queries
    queries.mobile() ? store.commit("setIsMenu", false) : store.commit("setIsMenu", true)

  }

}
