const svgIcons = {
  trash: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>',
  license: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-license" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" /><line x1="9" y1="7" x2="13" y2="7" /><line x1="9" y1="11" x2="13" y2="11" /></svg>',
  floppy: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><circle cx="12" cy="14" r="2" /><polyline points="14 4 14 8 8 8 8 4" /></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>',
  logout: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>',
  arrows_sort: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-sort" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9l4 -4l4 4m-4 -4v14" /><path d="M21 15l-4 4l-4 -4m4 4v-14" /></svg>',
  drag_drop: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-drag-drop" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /><path d="M13 13l9 3l-4 2l-2 4l-3 -9" /><line x1="3" y1="3" x2="3" y2="3.01" /><line x1="7" y1="3" x2="7" y2="3.01" /><line x1="11" y1="3" x2="11" y2="3.01" /><line x1="15" y1="3" x2="15" y2="3.01" /><line x1="3" y1="7" x2="3" y2="7.01" /><line x1="3" y1="11" x2="3" y2="11.01" /><line x1="3" y1="15" x2="3" y2="15.01" /></svg>',
  wallet: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" /><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" /></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>',
  stack: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="12 4 4 8 12 12 20 8 12 4" /> <polyline points="4 12 12 16 20 12" /> <polyline points="4 16 12 20 20 16" /> </svg>',
  stack_2: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 6l-8 4l8 4l8 -4l-8 -4" /> <path d="M4 14l8 4l8 -4" /> </svg>',
  currency_dollar: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /> <path d="M12 3v3m0 12v3" /> </svg>',
  notebook: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" /> <line x1="13" y1="8" x2="15" y2="8" /> <line x1="13" y1="12" x2="15" y2="12" /> </svg>',
  credit_card: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="3" y="5" width="18" height="14" rx="3" /> <line x1="3" y1="10" x2="21" y2="10" /> <line x1="7" y1="15" x2="7.01" y2="15" /> <line x1="11" y1="15" x2="13" y2="15" /> </svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" /> <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /> </svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" /> <line x1="12" y1="6" x2="12" y2="19" /> <line x1="21" y1="6" x2="21" y2="19" /> </svg>',
  briefcase: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="3" y="7" width="18" height="13" rx="2" /> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /> <line x1="12" y1="12" x2="12" y2="12.01" /> <path d="M3 13a20 20 0 0 0 18 0" /> </svg>',
  map_pin: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="11" r="3" /> <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /> </svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="4" y="5" width="16" height="16" rx="2" /> <line x1="16" y1="3" x2="16" y2="7" /> <line x1="8" y1="3" x2="8" y2="7" /> <line x1="4" y1="11" x2="20" y2="11" /> <line x1="11" y1="15" x2="12" y2="15" /> <line x1="12" y1="15" x2="12" y2="18" /> </svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="9" /> <polyline points="12 7 12 12 15 15" /> </svg>',
  id: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="3" y="4" width="18" height="16" rx="3" /> <circle cx="9" cy="10" r="2" /> <line x1="15" y1="8" x2="17" y2="8" /> <line x1="15" y1="12" x2="17" y2="12" /> <line x1="7" y1="16" x2="17" y2="16" /> </svg>',
  device_mobile: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="7" y="4" width="10" height="16" rx="1" /> <line x1="11" y1="5" x2="13" y2="5" /> <line x1="12" y1="17" x2="12" y2="17.01" /> </svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="12" r="2" /> <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /> </svg>',
  list: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="9" y1="6" x2="20" y2="6" /> <line x1="9" y1="12" x2="20" y2="12" /> <line x1="9" y1="18" x2="20" y2="18" /> <line x1="5" y1="6" x2="5" y2="6.01" /> <line x1="5" y1="12" x2="5" y2="12.01" /> <line x1="5" y1="18" x2="5" y2="18.01" /> </svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="10" cy="10" r="7" /> <line x1="21" y1="21" x2="15" y2="15" /> </svg>',
  package: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /> <line x1="12" y1="12" x2="20" y2="7.5" /> <line x1="12" y1="12" x2="12" y2="21" /> <line x1="12" y1="12" x2="4" y2="7.5" /> <line x1="16" y1="5.25" x2="8" y2="9.75" /> </svg>',
  checkbox: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <polyline points="9 11 12 14 20 6" /> <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /> </svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /> </svg>',
  layout2: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <rect x="4" y="4" width="6" height="5" rx="2" /> <rect x="4" y="13" width="6" height="7" rx="2" /> <rect x="14" y="4" width="6" height="7" rx="2" /> <rect x="14" y="15" width="6" height="5" rx="2" /> </svg>',
  file_text: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-text" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M14 3v4a1 1 0 0 0 1 1h4" /> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /> <line x1="9" y1="9" x2="10" y2="9" /> <line x1="9" y1="13" x2="15" y2="13" /> <line x1="9" y1="17" x2="15" y2="17" /> </svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" /> </svg>',
  arrow_narrow_left: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="5" y1="12" x2="19" y2="12" /> <line x1="5" y1="12" x2="9" y2="16" /> <line x1="5" y1="12" x2="9" y2="8" /> </svg>',
  arrow_narrow_right: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="5" y1="12" x2="19" y2="12" /> <line x1="15" y1="16" x2="19" y2="12" /> <line x1="15" y1="8" x2="19" y2="12" /> </svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="{PLACEHOLDER}" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M5 12l5 5l10 -10" /> </svg>',
  getIcon (icon, color) {
    return this[icon].replace('{PLACEHOLDER}', color)
  }
}

export default svgIcons