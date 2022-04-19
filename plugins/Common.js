const helper = {
  getIcon (context, icon = 'home', color = '#ffffff') {
    return context.$store.state.svgIcons.getIcon(icon, color)
  }
}

export default ({ app }, inject) => {
  inject('helper', helper)
}
