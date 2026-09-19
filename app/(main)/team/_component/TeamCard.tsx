import Image from "next/image";
import React from "react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role?: string;
  prev: string;
  image: string;
  linkedin?: string;
  mail?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({
  member: { name, role, prev, image, linkedin, mail },
}: TeamCardProps) => {
  return (
    <div
      className="
        relative
        w-full
        max-w-[720px]
        min-h-[260px]
        overflow-hidden
        rounded-[22px]
        border
        border-[#e8e5dc]
        bg-[#faf9f4]
        px-6
        py-8
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        md:px-10
        md:py-11
      "
    >
      {/* Main Content */}
      <div
        className={`
          flex
          flex-col
          items-center
          gap-4
          text-center
          ${
            image
              ? "md:flex-row md:items-center md:gap-6 md:text-left"
              : "md:items-center md:text-center"
          }
        `}
      >
        {/* Profile Image */}
        {image && (
          <div
            className="
              relative
              h-[130px]
              w-[130px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#f0f0eb]
            "
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="130px"
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className={`
            flex
            w-full
            flex-col
            gap-2
            md:gap-3
            ${
              image
                ? "items-center md:items-start"
                : "items-center text-center"
            }
          `}
        >
          {/* Name */}
          <h2
            className="
              text-[26px]
              font-bold
              leading-tight
              tracking-[-0.02em]
              text-[#171717]
              md:text-[28px]
            "
          >
            {name}
          </h2>

          {/* Role */}
          {role && (
            <p
              className="
                text-[18px]
                font-bold
                leading-tight
                text-[#4c8b68]
                md:text-[20px]
              "
            >
              {role}
            </p>
          )}

          {/* Previous Organization / Position */}
          {prev && (
            <p
              className="
                text-[13px]
                font-semibold
tracking-wide
                text-[#9a9a9a]
                md:text-[14px]
              "
            >
              {prev}
            </p>
          )}

          {/* Social / Contact Icons */}
          <div className="flex items-center justify-center gap-2">
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
              >
                <Image
                  src="/svg/linkedInColour.svg"
                  alt="LinkedIn"
                  width={36}
                  height={36}
                />
              </Link>
            )}

            {mail && (
              <Link
                href={`mailto:${mail}`}
                aria-label={`Email ${name}`}
              >
                <Image
                  src="/svg/mailcolour.svg"
                  alt="Email"
                  width={52}
                  height={52}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;