// Function to get the image URL
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};

// Function to check if a project has a demo or DOI key and handle "Demo Coming Soon"
export const getProjectLinkType = (project) => {
    if (project.DOI) {
        return { type: 'DOI', href: project.DOI };
    } else if (project.demo) {
        return { type: 'Demo', href: project.demo };
    } else {
        return { type: 'Demo Soon', href: '#' };
    }
};

// Function to check if a project has a source key and handle "Source Not Available"
export const getProjectSourceLink = (project) => {
    if (project.source) {
        return { type: 'Source', href: project.source };
    } else {
        return { type: 'Source N/A', href: '#' }; // or any placeholder URL
    }
};
