// ============================================================
//  YOUR PROJECTS: edit names, years and text here.
//  Both pages (home timeline and Projects page) read from this file.
//  Change only the text between the quotes.
//
//  year   = the year on the badge and in the timeline
//  period = the dates shown on the cards ("Mid 2022 – Early 2024")
//  role   = your role on that project (leave "" to hide it)
//  hero   = a hero video that autoplays first, on the timeline and the project page.
//           Put a poster image with the same name next to it (hero/zaid.mp4 + hero/zaid.jpg).
//  photos / videos = how many files are in media/p/<id>/
//  (p01.jpg, p02.jpg ... and v01.mp4, v02.mp4 ...). Photo 1 is the cover.
// ============================================================
window.SITE_PROJECTS = [
  { id: "coldstore", name: "Universal Cold Store", year: "2024", period: "Late 2024 – Mid 2026", role: "Project manager",
    type: "Industrial · Cold storage",
    description: "A cold storage warehouse: a steel roof frame on a concrete frame with block infill walls.",
    photos: 3, videos: 4 },
  { id: "hamad", name: "Hamad Bey", year: "2023", period: "2023 – 2024", role: "Site engineer",
    type: "Villa", hero: "media/hero/hamad.mp4",
    description: "A three-storey villa on a wooded hillside, from waterproofed foundations to the finished façade and garden lighting.",
    photos: 15, videos: 4 },
  { id: "zaid", name: "Zaid Bey", year: "2022", period: "Mid 2022 – Early 2024", role: "Site engineer",
    type: "Mansion", hero: "media/hero/zaid.mp4",
    description: "A U-shaped classical mansion with balustraded terraces, a columned rotunda, marble interiors and landscaped grounds.",
    photos: 23, videos: 4 },
  { id: "naser", name: "Naser Bey", year: "2022", period: "2022", role: "",
    type: "Villa",
    description: "A white villa with curved balconies, with retaining walls and a steel pergola along the sloping garden.",
    photos: 4, videos: 0 },
  { id: "muhammed", name: "Muhammed Bey", year: "2021", period: "Late 2021 – Early 2023", role: "Project engineer",
    type: "Lakeside villa", hero: "media/hero/muhammed.mp4",
    description: "A curved two-storey villa on a steep hillside above the lake, from excavation and retaining walls to a double-height glass hall. Our first international client; I graduated partway through the build.",
    photos: 34, videos: 6 },
  { id: "oral", name: "Oral İş Merkezi", year: "2021", period: "2020 – 2021", role: "Student engineer",
    type: "Business centre",
    description: "A multi-storey business centre: roof waterproofing, plastering, stairs and interior finishes.",
    photos: 10, videos: 0 },
  { id: "morgul", name: "Mörgül İş Merkezi", year: "2020", period: "2020 – 2021", role: "Student engineer",
    type: "Business centre",
    description: "A concrete-frame business centre: raft and slab reinforcement, poured by pump.",
    photos: 10, videos: 0 },
  { id: "seker", name: "Şeker Mahallesi", year: "2020", period: "2020 – 2021", role: "Student engineer",
    type: "Residential",
    description: "An apartment block on a tight urban plot: column formwork, slabs and brick infill.",
    photos: 7, videos: 0 },
  { id: "karaosman", name: "Kara Osman", year: "2020", period: "2020 – 2021", role: "Student engineer",
    type: "Residential",
    description: "An apartment building with a grey-brick façade, fitted kitchens and finished interiors.",
    photos: 7, videos: 1 },
  { id: "intern", name: "Infrastructure Internship", year: "Intern", period: "", role: "Intern",
    type: "Infrastructure",
    description: "Street excavation and pipe laying, with site visits to a water treatment plant and a solar installation.",
    photos: 4, videos: 0 },
];
