export function handleUploadImage() {
    window.cloudinary.openUploadWidget({
      cloudName: "dftw7onwl",
      uploadPreset: "smrutify",
      sources: [
        "local",
        "url"
      ],
      showAdvancedOptions: false,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#FCC509",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#FCC509",
          action: "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },
        fonts: {
          default: null,
          "'Inter', sans-serif": {
            url: "https://fonts.googleapis.com/css2?family=Inter",
            active: true
          }
        }
      }
    },
      (err, info) => {
        if (info.event === "success") {
            return {url: info.info.secure_url}
        } else {
            return {error: err}
        }
      }
    );
  }