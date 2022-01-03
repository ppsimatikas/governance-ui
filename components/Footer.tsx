import DiscordIcon from './DiscordIcon'
import GithubIcon from './GithubIcon'
import TwitterIcon from './TwitterIcon'

const Footer = () => {
  return (
    <div className="flex justify-around bottom-0 bg-bkg-1  w-full absolute left-0 h-20 px-12 border-t border-primary-light">
      <div className="flex justify-center items-center gap-x-6">
        <a
          rel="noreferrer"
          href="https://docs.realms.today/"
          target="_blank"
          className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
        >
          Docs
        </a>

        <a
          rel="noreferrer"
          href="https://github.com/solana-labs/solana-program-library/blob/master/governance/README.md"
          target="_blank"
          className="text-white text-base font-light hover:text-primary-dark transition-all duration-200"
        >
          Programs Github
        </a>
      </div>

      <div className="flex justify-center items-center gap-x-24">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/solana"
          className="text-primary-light text-base font-light"
        >
          <TwitterIcon className="" />
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/solana-labs/governance-ui"
          className="text-primary-light text-base font-light"
        >
          <GithubIcon className="" />
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://discord.com/invite/VsPbrK2hJk"
          className="text-primary-light text-base font-light"
        >
          <DiscordIcon className="" />
        </a>
      </div>

      <div className="flex justify-center items-center gap-x-1">
        <p className="text-white text-base font-light cursor-default">
          Powered by
        </p>

        <a
          rel="noreferrer"
          href="https://solana.com/"
          target="_blank"
          className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
        >
          Solana
        </a>
      </div>
    </div>
  )
}

export default Footer