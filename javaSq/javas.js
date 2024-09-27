function showDetails(member) {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');

    let details = '';

    switch (member) {
        case 'ahmed':
            details = '<h2>Dr. Ahmed Al-Ali</h2><p>Assistant Professor of Criminology with over 10 years of experience in criminal behavior studies.</p>';
            break;
        case 'sarah':
            details = '<h2>Dr. Sarah Youssef</h2><p>A specialist in forensic science, with numerous studies in forensic evidence analysis.</p>';
            break;
        case 'khaled':
            details = '<h2>Dr. Khaled Mahmoud</h2><p>Head of the Criminal Investigations Department, specializing in modern investigation techniques.</p>';
            break;
        case 'laila':
            details = '<h2>Dr. Laila Hassan</h2><p>Professor of forensic evidence, focusing on innovative methods in evidence analysis.</p>';
            break;
        case 'omar':
            details = '<h2>Dr. Omar Faisal</h2><p>Associate Professor of Digital Forensics, expert in digital evidence analysis.</p>';
            break;
        case 'noor':
            details = '<h2>Dr. Noor Abdullah</h2><p>An expert in forensic toxicology, specializing in laboratory analysis of toxic substances.</p>';
            break;
    }

    modalBody.innerHTML = details;
    modal.style.display = 'block';
}

function closeDetails() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}
