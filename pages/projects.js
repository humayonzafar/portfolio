import React from 'react';
import { Box, Button, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { NextSeo } from 'next-seo';
import LineHeading from '@/components/LineHeading';
import RepoCard from '@/components/RepoCard';
import PinnedProjects from '@/components/PinnedProjects';
import { pinnedRepos } from '@/data/pinnedRepos';

function Projects({ repos }) {
    return (
        <>
            <NextSeo title='Projects' />
            <Box width='full' px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'>
                <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
                    <LineHeading fontSize={{ base: `5xl`, md: `6xl` }} mx='auto' textAlign='center'>
                        My projects
                    </LineHeading>
                    <Text mt={3}>A quick collection of my projects.</Text>
                    <VStack direction='column' my={16} width='full' height='full' maxWidth='5xl' spacing={10}>
                        {pinnedRepos.map((data, index) => (
                                <PinnedProjects
                                    key={index.toString()}
                                    repo={repos.find((x) => x.name.toLowerCase() === data.id.toLowerCase())}
                                    left={index % 2 === 0}
                                    projectData={data}
                                />
                            ))}
                    </VStack>
                    <LineHeading fontSize={{ base: `5xl`, lg: `5xl` }} textAlign='center'>
                        Repositories
                    </LineHeading>
                    <Text mt={3}>A list of all of the public repositories on my GitHub.</Text>
                    <Button
                        as='a'
                        target={'_blank'}
                        href='https://github.com/humayonzafar'
                        variant='ghost'
                        colorScheme='brand'
                        size='lg'
                        mt={5}
                        leftIcon={<FaGithub />}
                    >
                        View My Profile
                    </Button>
                </Flex>
                <SimpleGrid
                    mt={10}
                    columns={{ base: 1, md: 2 }}
                    width='full'
                    height='full'
                    maxH='full'
                    mx='auto'
                    gridAutoRows='1fr'
                    spacingX={10}
                    spacingY={8}
                    isTruncated
                    overflow='visible'
                >
                    {repos
                        .sort(
                            (a, b) => new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()
                        )
                        .reverse()
                        .map((repo, index) => (
                            <RepoCard key={index.toString()} repo={repo} i={index} />
                        ))}
                </SimpleGrid>
            </Box>
        </>
    );
}

export async function getStaticProps(){
    const userResponse = await fetch(`https://api.github.com/users/humayonzafar`);
    const userReposResponse = await fetch(`https://api.github.com/users/humayonzafar/repos?per_page=100`);

    const user = await userResponse.json();
    const repositories = await userReposResponse.json();

    const notForked = repositories.filter((repo) => !repo.fork);
    const stars = notForked.reduce((a, r) => a + r.stargazers_count, 0) || null;

    const repos = notForked.map(({ id, name, html_url, created_at, pushed_at, language, description, fork, stargazers_count }) => ({
        id, name, html_url, created_at, pushed_at, language, description, fork, stargazers_count,
    }));

    return { props: { stars, repos, followers: user.followers }, revalidate: 600 };
}

export default Projects;
