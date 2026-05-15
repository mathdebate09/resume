import Image from 'next/image'
import { Mail, Phone, Globe, Download } from 'lucide-react'
import type { ReactNode } from 'react'
import resume from './data.json'

export default function Resume() {
  const contactIcons: Record<string, ReactNode> = {
    phone: <Phone size={14} />,
    mail: <Mail size={14} />,
    globe: <Globe size={14} />,
  }

  const renderContactIcon = (contact: (typeof resume.header.contacts)[number]) => {
    if (contact.image) {
      return <Image src={contact.image.src} alt={contact.image.alt} width={14} height={14} />
    }

    return contactIcons[contact.icon]
  }

  return (
    <main className="min-h-screen bg-white text-black py-8 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-2 flex items-center justify-center gap-3">
            <h1 className="text-5xl font-serif font-bold">{resume.header.name}</h1>
            <a
              href={resume.header.download.href}
              download={resume.header.download.filename}
              className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500 hover:text-black"
            >
              <Download size={14} />
            </a>
          </div>
          <p className="text-sm text-gray-700 mb-4">{resume.header.location}</p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {resume.header.contacts.map((contact) => (
              <a
                key={`${contact.label}-${contact.href}`}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1.5 text-gray-700 hover:text-black"
              >
                {renderContactIcon(contact)}
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Education</h2>
          {resume.education.map((entry) => (
            <div key={`${entry.school}-${entry.dates}`} className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">{entry.school}</h3>
                <p className="text-sm italic text-gray-700">{entry.degree}</p>
              </div>
              <div className="text-right text-sm whitespace-nowrap ml-4">
                <p className="font-semibold">{entry.dates}</p>
                <p className="text-gray-700">{entry.detail}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Technical Skills</h2>
          <div className="space-y-2 text-sm">
            {resume.skills.map((skill) => (
              <p key={skill.label}>
                <span className="font-bold">{skill.label}:</span>{' '}
                <span className="text-gray-700">{skill.value}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Experience</h2>
          {resume.experience.map((role) => (
            <div key={`${role.company}-${role.dates}`} className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{role.company}</h3>
                <span className="text-sm whitespace-nowrap ml-4">{role.dates}</span>
              </div>
              <p className="text-sm italic text-gray-700 mb-3">
                {role.role}
                {role.location ? <span className="float-right">{role.location}</span> : null}
              </p>
              <ul className="text-sm space-y-1 ml-4">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-gray-600 shrink-0">–</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Projects</h2>
          {resume.projects.map((project) => (
            <div key={project.name} className="mb-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.tech}</p>
                </div>
                <div className="text-right text-[13px] sm:text-sm flex items-center justify-end gap-2 whitespace-nowrap">
                  {project.links.map((link, index) => (
                    <span key={`${project.name}-${link.label}`} className="flex items-center gap-2">
                      <a href={link.href} className="text-blue-600 hover:underline">
                        {link.label}
                      </a>
                      {index < project.links.length - 1 ? <span className="text-gray-400">|</span> : null}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="text-sm space-y-1 ml-4 mt-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-gray-600 shrink-0">–</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Extracurricular */}
        <section>
          <h2 className="text-xl font-serif font-bold border-b border-gray-800 pb-1 mb-4">Extracurricular</h2>
          {resume.extracurricular.map((activity) => (
            <div key={`${activity.title}-${activity.dates}`}>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold">{activity.title}</h3>
                <span className="text-sm whitespace-nowrap ml-4">{activity.dates}</span>
              </div>
              <p className="text-sm italic text-gray-700 mb-3">
                {activity.role} {activity.location ? <span className="float-right">{activity.location}</span> : null}
              </p>
              <ul className="text-sm space-y-1 ml-4">
                {activity.highlights.map((highlight, index) => (
                  <li key={`${activity.title}-${index}`} className="flex gap-3">
                    <span className="text-gray-600 shrink-0">–</span>
                    <span>
                      {highlight.text}
                      {highlight.links.map((link, linkIndex) => (
                        <span key={`${link.label}-${link.href}`}>
                          <a href={link.href} className="text-blue-600 hover:underline">
                            {link.label}
                          </a>
                          {linkIndex < highlight.links.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                      {highlight.suffix}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
